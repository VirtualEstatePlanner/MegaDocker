/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const rocketchatMongoStartupDotShMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 50012,
  miteFile: {
    path: `rocketchat/mongo-startup`,
    name: `startup`,
    extension: `sh`,
    permissions: `755`,
    contents: `# MegaDocker rocketchat mongo replica configuration script file for [[MOBNAME]]
#!/bin/sh
echo "generating replicate command"
replicate='rs.initiate(); sleep(1000); cfg = rs.conf(); cfg.members[0].host = "[[MOBNAME]]_rocketchat-mongo:27017"'
echo "attempting to generate replica set"
echo \${replicate} | mongo --host [[MOBNAME]]_mongo
echo "we probably successfully generated the rocketchat mongodb replica set if you're reading this."
`,
  },
}
