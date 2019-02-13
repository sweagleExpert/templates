{{
/* This is used to update a key/value table on any SQL database */
/* Strategy is to delete all and insert all, to use in case some keys were removed or created */
rootNode="table2columns";
}}
{{ if (metadataset[rootNode] == null) { }}
ERROR: Cannot find root node !
{{ } else {
metadataset = metadataset[rootNode];
tableName = Object.keys(metadataset)[0];
tableContent = metadataset[tableName];
}}
DELETE FROM {{= tableName }};
{{ for (key in tableContent) { }}
INSERT INTO {{= tableName }} VALUES ('{{= key }}', '{{= tableContent[key] }}');
{{ } } }}
