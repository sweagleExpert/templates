{{
/* This is used to create a tnsnames.ora file */
rootNode="tnsnames.ora";

if (metadataset[rootNode] == null) { }}
ERROR: cannot find the root node !
{{ } else {
metadataset = metadataset[rootNode];

function createNode(mds,index) {
  nodeITEM="";
  for (item in mds) {
    if  (typeof (mds[item]) === "object") {
      /* It it is a new node, create a tnsnames section */
      /* Call recursively to manage items in node */
      nodeITEM = nodeITEM + "\n" + "\t".repeat(index) + "(" + item + "=";
      nodeITEM = nodeITEM + createNode(mds[item],index+1) + ")";
    } else {
      /* it is a parameter, just add it */
      if (item == "#text") {
        /* handle XML format case */
        nodeITEM = nodeITEM + "\"" + mds[item] + "\"";
      } else {
        nodeITEM = nodeITEM + "\n" + "\t".repeat(index) + "(" + item + "=\"" + mds[item] + "\")";
      }
    }
  }
  return nodeITEM;
}

/* First level represents the start key */
for (key in metadataset) {
  tnsnames = key + "="+ createNode(metadataset[key],1) + "\n";
}}

{{= tnsnames }}

{{ } } }}
