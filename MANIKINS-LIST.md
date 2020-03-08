# MANIKINS-LIST

## a list of the first 50 manikins, which ones are working, and what features they still need

Manikins in **bold** are currently working, but may have more features to add

1. Backup : currently just a stub - check funkypenguin
2. Bitwarden : - check funkypenguin
3. Calibre : - check funkypenguin
4. Ceph : - check funkypenguin
5. Collabora : - check funkypenguin
6. DNS Anchor : probably exists on Docker Hub?
7. **Drupal** : needs LDAP for auth
8. **ELK** : needs filebeat to push logs to elasticsearch, kibana indexes, probably still needs logstash
9. E-mail : needs Traefik tcp forwarding for 25, 587, 993 and super-requires LDAP
10. Getter (autopirate) : - check funkypenguin for nzbget, rtorrent, sonarr, radarr, mylar, lazylibrarian, headphones, lidarr, nzbhydra, ombi,
11. **Ghost** : needs LDAP for auth
12. GitLab : needs tcp forwarding for 22, needs LDAP for auth
13. Grafana : - check funkypenguin, needs filebeats/kibana integration
14. **Heimdall** : I wish there was a way to autopopulate the stuff in traefik, but we probably need a customMite to be generated during zip
15. Huginn : - check funkypenguin
16. **Kanboard** : - needs LDAP for auth
17. Keycloak : -check funkypenguin
18. **LDAP** : needs traefik tcp forwarding for 389, 636, 6443
19. Ledger : currently barely more than a stub
20. MegaDocker: dockerize web-app in an nginx container
21. Nextcloud : takes 2 minutes to start after container launch, requires manual setup, never launches fully
22. **Nginx** : needs complete rework
23. Owncloud : might be a nextcloud copy
24. **Pihole** : needs LDAP for auth
25. Piwik : - check funkypenguin
26. Plex : - check funkypenguin
27. **Portainer** : needs LDAP for auth
28. PrivateBin : - check funkypenguin
29. Prometheus : - check funkypenguin
30. RocketChat : has a mongoDB replication issue, I think
31. **Skopos** : needs LDAP for auth
32. **Swarmpit** : needs LDAP for auth
33. **Traefik** : needs LDAP for auth
34. **VS Code** : has serious issuues but theoretically works, wants LDAP for auth if possible
35. **Visualizer**: principle of least access: might need LDAP for auth
36. Wallabag : - check funkypenguin
37. WebDAV : is not connectable, but docker reports as running
38. **WordPress** : needs LDAP for auth
