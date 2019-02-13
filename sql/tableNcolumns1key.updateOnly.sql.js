{{
/* This is used to update a key/value table on any SQL database */
/* Strategy here is to update only in case you are sure no new or removed values */
/* This strategy is also more secured than the delete & insert one */
rootNode="tableNcolumns1key";
keyColumnName="KEY";
}}
{{ if (metadataset[rootNode] == null) { }}
ERROR: cannot find the root node !
{{ } else {
metadataset = metadataset[rootNode];
tableName = Object.keys(metadataset)[0];
tableContent = metadataset[tableName];
}}
{{ for (keyVal in tableContent) { }}
UPDATE {{= tableName }}
  SET {{columnArray = Object.keys(tableContent[keyVal]);
    valueArray = Object.values(tableContent[keyVal]);
    i=0; while (i < columnArray.length-1) { }}
    '{{= columnArray[i] }}' = '{{= valueArray[i] }}',{{ i++; } }}
    '{{= columnArray[i] }}' = '{{= valueArray[i] }}'
  WHERE {{= keyColumnName }} = '{{= keyVal }}';
{{ } } }}
