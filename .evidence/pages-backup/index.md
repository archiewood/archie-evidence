---
title: Archie Sarre Wood
hide_title: true
---

<img src="https://avatars.githubusercontent.com/archiewood" alt="Archie" class="rounded-full w-24 h-24 mb-4">

## Archie Sarre Wood

<div style="display: flex; flex-direction: row; gap: 10px;">
    <a href="https://www.linkedin.com/in/archiesarrewood/"><img src="https://img.shields.io/badge/-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
    <a href="https://x.com/archieemwood"><img src="https://img.shields.io/badge/-000000?style=for-the-badge&logo=x&logoColor=white" alt="Twitter"></a>
    <a href="https://bsky.app/profile/archie.sarrewood.com"><img src="https://img.shields.io/badge/-00A0DC?style=for-the-badge&logo=bluesky&logoColor=white" alt="Bluesky"></a>
    <a href="https://github.com/archiewood"><img src="https://img.shields.io/badge/-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
</div>

<LineBreak lines=1/>

Building and growing developer tools. Working on [Evidence](https://evidence.dev), an open-source business intelligence tool.

## Projects


```sql projects
select 
    'DuckDB GSheets' as name,
    'https://duckdb-gsheets.com/' as url,
    'https://github.com/evidence-dev/duckdb_gsheets' as source_code,
    'Connect Google Sheets to DuckDB' as description,
    87 as stars
union all select
    'DuckDB SQLTools',
    'https://github.com/evidence-dev/sqltools-duckdb-driver',
    'https://github.com/evidence-dev/sqltools-duckdb-driver',
    'SQLTools extension for DuckDB',
    20 as stars
union all select
    'BigQuery SQLTools',
    'https://github.com/evidence-dev/sqltools-bigquery-driver',
    'https://github.com/evidence-dev/sqltools-bigquery-driver',
    'SQLTools extension for BigQuery',
    40 as stars
union all select
    'GoSQL',
    'https://github.com/archiewood/gosql',
    'https://github.com/archiewood/gosql',
    'A simple SQL database implemented in Go',
    150 as stars
union all select
    'Pure CSS Site',
    'https://pure-css-site.netlify.app/',
    'https://github.com/archiewood/pure-css-site/blob/master/index.css',
    'A site built with only CSS',
    16 as stars
union all select
    'Baby Tracker',
    'https://baby-tracker.evidence.app/',
    'https://github.com/archiewood/baby-tracker',
    'A data viz app to track baby''s feed and sleep',
    10 as stars
```

<DataTable data={projects} link=url>
  <Column id=name/>
  <Column id=description/>
  <Column id=stars/>
  <Column id=source_code contentType=link linkLabel="GitHub &rarr;"/>
</DataTable>

<BarChart 
  data={projects} 
  title="GitHub Stars by Project"
  x=name 
  y=stars 
  swapXY
  yAxisLabels=false
  yGridlines=false
  labels=true
/>



## Experience

### Community and Growth @ Evidence
*Apr 2022 - Present | Toronto / London*

Leading community engagement and growth initiatives for Evidence, an open-source business intelligence platform that enables code-driven analytics. Responsibilities span:
- Technical documentation and developer experience
- Community management (GitHub Issues & PRs)
- Content creation (Blog, Social Media)
- Developer relations and conference speaking
- Product strategy and development

### BI Team Manager & Chief of Staff @ Patch Plants
*Jan 2021 - Sep 2021 | London, UK*

Led data strategy and operations for fast-growing e-commerce startup (194% growth in 2020):
- Managed BI stack (Fivetran, Snowflake, dbt, Looker) and data team
- Executive team member driving strategic planning and OKRs
- Led special projects including geographic expansion and Brexit planning
- Board observer

### Strategy Manager @ Patch Plants
*Aug 2019 - Dec 2020 | London, UK*

- Led £2.4m equity crowdfunding round with 3,000+ investors
- Drove initiatives improving order contribution by 34%
- Managed UK-wide expansion project

### Consultant @ OC&C Strategy Consultants
*2016 - 2019 | London, UK*

Led strategy projects across retail, consumer goods, and B2B services:
- Customer segmentation and market sizing
- Operational transformation
- Commercial due diligence
- Team leadership of 2-5 consultants



## Education

**University of Cambridge**
- MSci Physics (First Class Honours) | 2014 - 2015
- BA Natural Sciences - Physics (First Class Honours) | 2011 - 2014

## Awards & Achievements

- Cambridge University Lightweight Rowing Blue (2015)
- British Physics Olympiad Gold Award

## Volunteer Work

**Physics Tutor | The Access Project**  
*2020 - 2022*  
Tutoring Physics to students from disadvantaged backgrounds
