{{
/* This is used to update a key/value table on any SQL database */
/* Strategy is to merge udates or insert if not exists, to use only if no keys were removed */
/* In case some keys are removed, refer to sql\table2columns.sql.js template */
rootNode="table2columns";
firstColumnName="KEY";
secondColumnName="VALUE";
}}
{{ if (metadataset[rootNode] == null) { }}
ERROR: Cannot find root node !
{{ } else {
metadataset = metadataset[rootNode];
tableName = Object.keys(metadataset)[0];
tableContent = metadataset[tableName];
for (key in tableContent) { }}
MERGE INTO {{= tableName }} USING dual ON ( {{= firstColumnName }}='{{= key }}' )
WHEN MATCHED THEN UPDATE SET {{= firstColumnName }}='{{= key }}' , {{= secondColumnName }}='{{= tableContent[key] }}'
WHEN NOT MATCHED THEN INSERT ({{= firstColumnName }},{{= secondColumnName }})
    VALUES ('{{= key }}', '{{= tableContent[key] }}' );
{{ } } }}
