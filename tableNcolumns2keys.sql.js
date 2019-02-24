{{
/* This is used to update a keys/values table on any SQL database */
/* Strategy is to delete all and insert all, to use in case some keys were removed or created */
rootNode="tableNcolumns2keys";
}}
{{ if (metadataset[rootNode] == null) { }}
ERROR: cannot find the root node !
{{ } else {
metadataset = metadataset[rootNode];
tableName = Object.keys(metadataset)[0];
tableContent = metadataset[tableName];
}}
DELETE FROM {{= tableName }};
{{ for (key1Val in tableContent) {
    for (key2Val in tableContent[key1Val]) {
  columnArray = Object.keys(tableContent[key1Val][key2Val]);
  valueArray = Object.values(tableContent[key1Val][key2Val]);}}
INSERT INTO {{= tableName }}
  ( {{i=0; while (i < columnArray.length-1) { }}{{= columnArray[i] }},{{ i++; } }}{{= columnArray[i] }} )
  VALUES ( {{i=0; while (i < valueArray.length-1) { }}'{{= valueArray[i] }}',{{ i++; } }}'{{= valueArray[i] }}' );
{{ } } } }}
