{{
  /* This is used to update a 2 primary keys/values table on any SQL database */
  /* Strategy here is to update only, in case you are sure no new or removed values */
  /* we are also able to find the table root node wherever it is in your MDS, based on its name */
tableName ="table-name";
key1ColumnName="column1-name";
key2ColumnName="column2-name";

tableContent=getValueByName(metadataset,tableName);
}}
{{ if (tableContent == null) { }}
ERROR: cannot find the table !
{{ } else {
for (key1Val in tableContent) {
    for (key2Val in tableContent[key1Val]) {
  columnArray = Object.keys(tableContent[key1Val][key2Val]);
  valueArray = Object.values(tableContent[key1Val][key2Val]);}}
UPDATE {{= tableName }}
  SET {{ i=0; while (i < columnArray.length-1) { }}
    {{= columnArray[i] }} = '{{= valueArray[i] }}',{{ i++; } }}
    {{= columnArray[i] }} = '{{= valueArray[i] }}'
  WHERE {{= key1ColumnName }} = '{{= key1Val }}' AND {{= key2ColumnName }} = '{{= key2Val }}';
{{ } } }

function getValueByName(mds, name) {
  var value = "ERROR: NOT FOUND";
  for (var item in mds) {
    if (item === name ) { return mds[item]; }
    if  (typeof (mds[item]) === "object") {
      value = getValueByName(mds[item], name);
      if (value != "ERROR: NOT FOUND") { return value; }
    }
  }
  return value;
}
}}
