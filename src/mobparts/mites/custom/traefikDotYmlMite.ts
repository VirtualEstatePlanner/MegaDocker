/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const traefikDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60020,
  miteFile: {
    path: `traefik`,
    name: `traefik`,
    extension: `yml`,
    permissions: `644`,
    contents: `
accessLog:
 filePath: accessLog.json
      
entryPoints:
 web:
  address: ":80"

 websecure:
  address: ":443"

 traefik:
  address: ":8888"

api:
 dashboard: true
 debug: true
 insecure: true

log:
 level: debug

providers:
 docker:
  watch: true
  endpoint: unix:///var/run/docker.sock
  exposedByDefault: false
  network: [[MOBNAME]]_traefik
  swarmMode: true

certificatesResolvers:
 [[PRIMARYDOMAIN]]:
  acme:
   email: [[CLOUDFLAREEMAIL]]
   storage: acme.json
   # uncomment to generate live (not testing) certificates
   caServer: "https://acme-v02.api.letsencrypt.org/directory"
   # uncomment for staging / testing to avoid LE's automatic rate limiting
   # caServer: "https://acme-staging-v02.api.letsencrypt.org/directory"
   # Available keyType values : "EC256", "EC384", "RSA2048", "RSA4096", "RSA8192"
   keyType: RSA8192
   dnsChallenge:
    provider: cloudflare
    resolvers:
     - "1.1.1.1:53"
     - "8.8.8.8:53"

`,
  },
}
