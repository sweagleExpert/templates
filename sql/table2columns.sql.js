{{
/* This is used to update a key/value table on any SQL database */
/* It is more easy to delete and insert again in case some keys were removed */
rootNode="table2columns";
}}
{{ if (metadataset[rootNode] == null) { }}
ERROR: cannot find the root node !
{{ } else {
metadataset = metadataset[rootNode];
tableName = Object.keys(metadataset)[0];
tableContent = metadataset[tableName];
}}
DELETE FROM {{= tableName }};
{{ for (key in tableContent) { }}
INSERT INTO {{= tableName }} VALUES ('{{= key }}', '{{= tableContent[key] }}');
{{ } } }}
