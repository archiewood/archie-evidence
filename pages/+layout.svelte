<script>
	import '@evidence-dev/tailwind/fonts.css';
	import '../app.css';
	import { EvidenceDefaultLayout } from '@evidence-dev/core-components';
	export let data;
</script>

<EvidenceDefaultLayout {data} hideBreadcrumbs hideSidebar githubRepo=https://github.com/archiewood/archie-evidence>
	<slot slot="content" />
</EvidenceDefaultLayout>
