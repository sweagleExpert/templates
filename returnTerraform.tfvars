{{ /* This is used to create a Terraform tfvars file */
rootNode="Terraform";
}}
{{ if (metadataset[rootNode] == null) { }}
ERROR: Cannot find root node !
{{ } else {
retrieveData(metadataset[rootNode]) } }}
{{ function retrieveData (cds) { 
for (item in cds) {
if (typeof (cds[item]) !== "object") { }}  
{{= item }} = "{{= cds[item] }}"
{{ } else { retrieveData(cds[item]) } }}
{{ } }}
{{ } }}
