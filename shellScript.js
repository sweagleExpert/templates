{{
/* This is used to create a shell script from SWEAGLE */
/* This is used when shell scripts contains tokens that should be calculated by SWEAGLE */
rootNode=Object.keys(metadataset)[0];
mds=metadataset[rootNode];
}}
{{ if (mds["shell"] == null) { }}
ERROR: Cannot find root node !
{{ } else {
lines = mds["shell"];
for (key in lines) { }}
{{= lines[key] }}{{ } }}
{{ } }}
