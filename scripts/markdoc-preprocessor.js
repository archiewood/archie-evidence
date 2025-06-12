import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Simple partial processing function
function processPartials(content, partialsDir) {
  // Regular expression to match {% partial file="filename" /%} syntax
  const partialRegex = /{%\s*partial\s+file\s*=\s*["']([^"']+)["']\s*\/%}/g;
  
  return content.replace(partialRegex, (match, filename) => {
    // Try with and without .md extension
    const possiblePaths = [
      path.join(partialsDir, filename),
      path.join(partialsDir, `${filename}.md`),
      path.join(partialsDir, filename.replace(/\.md$/, ''))
    ];
    
    for (const filePath of possiblePaths) {
      if (fs.existsSync(filePath)) {
        const partialContent = fs.readFileSync(filePath, 'utf8');
        // Recursively process partials in the included content
        return processPartials(partialContent, partialsDir);
      }
    }
    
    console.warn(`Warning: Partial "${filename}" not found`);
    return match; // Return original if not found
  });
}

// Backup original pages
function backupPages() {
  const pagesDir = path.join(rootDir, 'pages');
  const backupDir = path.join(rootDir, '.evidence', 'pages-backup');
  
  // Create backup directory
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  // Copy all files from pages to backup
  const files = globSync('**/*', { cwd: pagesDir, nodir: true });
  
  files.forEach(file => {
    const sourcePath = path.join(pagesDir, file);
    const targetPath = path.join(backupDir, file);
    
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.copyFileSync(sourcePath, targetPath);
  });
  
  console.log('✓ Backed up original pages');
}

// Process all markdown files
function processAllMarkdownFiles() {
  const pagesDir = path.join(rootDir, 'pages');
  const partialsDir = path.join(rootDir, 'partials');
  
  // Check if partials directory exists
  if (!fs.existsSync(partialsDir)) {
    console.log('No partials directory found, skipping Markdoc processing');
    return;
  }
  
  // Find all markdown files
  const files = globSync('**/*.md', { cwd: pagesDir });
  
  let processedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file contains partial references
    if (content.includes('{% partial')) {
      const processedContent = processPartials(content, partialsDir);
      
      // Only write if content changed
      if (processedContent !== content) {
        fs.writeFileSync(filePath, processedContent);
        console.log(`✓ Processed: ${file}`);
        processedCount++;
      }
    }
  });
  
  if (processedCount === 0) {
    console.log('No files with partials found');
  } else {
    console.log(`\n✓ Processed ${processedCount} file(s) with Markdoc partials`);
  }
}

// Restore original pages (for development)
function restorePages() {
  const backupDir = path.join(rootDir, '.evidence', 'pages-backup');
  const pagesDir = path.join(rootDir, 'pages');
  
  if (!fs.existsSync(backupDir)) {
    console.log('No backup found');
    return;
  }
  
  const files = globSync('**/*', { cwd: backupDir, nodir: true });
  
  files.forEach(file => {
    const sourcePath = path.join(backupDir, file);
    const targetPath = path.join(pagesDir, file);
    
    fs.copyFileSync(sourcePath, targetPath);
  });
  
  console.log('✓ Restored original pages');
}

// Main execution
const command = process.argv[2];

try {
  switch (command) {
    case 'restore':
      restorePages();
      break;
    case 'backup':
      backupPages();
      break;
    default:
      console.log('Processing Markdoc partials...');
      backupPages();
      processAllMarkdownFiles();
      break;
  }
} catch (error) {
  console.error('Error processing Markdoc:', error);
  process.exit(1);
}