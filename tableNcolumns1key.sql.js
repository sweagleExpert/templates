{{
/* This is used to update a key/value table on any SQL database */
/* Strategy is to delete all and insert all, to use in case some keys were removed or created */
rootNode="tableNcolumns1key";
}}
{{ if (metadataset[rootNode] == null) { }}
ERROR: cannot find the root node !
{{ } else {
metadataset = metadataset[rootNode];
tableName = Object.keys(metadataset)[0];
tableContent = metadataset[tableName];
}}
DELETE FROM {{= tableName }};
{{ for (keyVal in tableContent) {
  columnArray = Object.keys(tableContent[keyVal]);
  valueArray = Object.values(tableContent[keyVal]); }}
INSERT INTO {{= tableName }}
  ( {{i=0; while (i < columnArray.length-1) { }}{{= columnArray[i] }},{{ i++; } }}{{= columnArray[i] }} )
  VALUES ( {{i=0; while (i < valueArray.length-1) { }}'{{= valueArray[i] }}',{{ i++; } }}'{{= valueArray[i] }}' );
{{ } } }}
