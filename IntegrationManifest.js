{{ /* This is used to create an Integration Manifest File */
	/* Integration manifest are properties files used by CA Release Automation during deployment */
rootNode="DeploymentManifest";
}}{{ if (metadataset[rootNode] == null) { }}
ERROR: Cannot find root node !
{{ } else {
metadataset = metadataset[rootNode];
environment = Object.keys(metadataset)[0];
params = metadataset[environment];
}}
<DeploymentManifest>
   <Environment>
{{ for (key in params) { if (typeof (params[key]) !== "object") { }}    <Parameter Name="{{= key }}">{{= params[key] }}</Parameter>{{ } else { /* This is a server type */ }}      <ServerType Name="{{= key }}">
      {{serverType = params[key];
      for (param2 in serverType) { }}   <Parameter Name="{{= param2 }}">{{= serverType[param2] }}</Parameter>
      {{ } }}</ServerType>
{{ } }}
{{ } }}
   </Environment>
</DeploymentManifest>
{{ } }}
