# ORACLE CONFIGURATION FILE RULES
  # Any keyword in a configuration file that should be recognized as beginning a parameter that includes one or more keyword-value pairs must be in the far left column of a line. If it is indented by one or more spaces, it is interpreted as a continuation of the previous line.
  # All characters must belong to the network character set (see the next section).
  # Keywords are not case sensitive. Values may be case sensitive, depending on the operating system and protocol.
  # Spaces around the "=" sign are optional in keyword-value pairs.
  # There is an implied hierarchy of keywords. That is, some keywords are always followed by other keywords. At any level of the hierarchy keywords can be listed in any order
  # For more details, see https://docs.oracle.com/cd/A57673_01/DOC/net/doc/NWUS233/apb.htm

# POSSIBLES VALUES
  # SOURCE_ROUTE possible values on | off | yes | no
  # LOAD_BALANCE possible values on | off | yes | no | true | false
  # FAILOVER possible values on | off | yes | no | true | false
  # SERVER possible values dedicated | shared | pooled
  # INSTANCE_ROLE possible values primary | secondary | any
  # PROTOCOL possible values are IPC | BEQ | TCP | SSL | RAW
  
#EXAMPLE
  # This is to illustrate a full options Oracle configuration
  # Some configuration items are redundant or useless
