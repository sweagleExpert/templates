{{
/* This is used to create a Websphere MQ mqsc config file */
mqsc = "";

function analyseCDS(subset) {
  for (item in subset) {
    if (typeof(subset[item]) === "object") {
      if (item == "local") {
        console.log("ENTERING QLOCAL");
        var qlocalSubset = subset[item];
        for (queue in qlocalSubset) {
          console.log("ENTERING QUEUE="+queue);
          mqsc = mqsc + createQLOCAL(qlocalSubset[queue]) + "\n";
        }
      } else { analyseCDS(subset[item]); }
    }
  }
}

function createQLOCAL(subset) {
  nodeITEM="DEFINE QLOCAL("+subset["name"]+subset["name-suffix"]+") +\n";
  if (subset["persistence"] == "P") {
    nodeITEM+="     DEFPSIST(YES) +\n";
  } else {
    nodeITEM+="     DEFPSIST(NO) +\n";
  }
  nodeITEM+="     DESCR('"+subset["description"]+"') +\n";
  nodeITEM+="     MAXDEPTH("+subset["max-depth"]+") +\n";
  nodeITEM+="     BOTHRESH("+subset["backout-threshold"]+") +\n";
  nodeITEM+="     MAXMSGL("+subset["msg-length"]+") +\n";
  nodeITEM+="     BOQNAME('"+subset["backout-queue"]+"') +\n";
  nodeITEM+="     REPLACE\n";
  return nodeITEM;
}

analyseCDS(metadataset);

}}

{{= mqsc }}
