# MANIKINS-LIST

## a list of the first 50 manikins, which ones are working, and what features they still need

### currently running: 16

Manikins in **bold** are currently working, but may have more features to add

1. Anchr :
2. Anuko :
3. Baby Buddy :
4. Backup : currently just a stub - check funkypenguin
5. Bitwarden : - check funkypenguin
6. Cachet :
7. Calibre : - check funkypenguin
8. Ceph : - check funkypenguin
9. Collabora : - check funkypenguin
10. DNS Anchor : probably exists on Docker Hub?
11. **Drupal** : needs LDAP for auth
12. **ELK** : needs filebeat to push logs to elasticsearch, kibana indexes, probably still needs logstash
13. E-mail : needs Traefik tcp forwarding for 25, 587, 993 and super-requires LDAP
14. Galette :
15. Getter (autopirate) : - check funkypenguin for nzbget, rtorrent, sonarr, radarr, mylar, lazylibrarian, headphones, lidarr, nzbhydra, ombi,
16. **Ghost** : needs LDAP for auth
17. **GitLab** : needs tcp forwarding for 22, needs LDAP for auth
18. Grafana : - check funkypenguin, needs filebeats/kibana integration
19. Grocy :
20. **Heimdall** : I wish there was a way to autopopulate the stuff in traefik, but we probably need a customMite to be generated during zip
21. Huginn : - check funkypenguin
22. Journal :
23. **Kanboard** : - needs LDAP for auth, needs admin user and password variable set
24. Keycloak : -check funkypenguin
25. **LDAP** : needs traefik tcp forwarding for 389, 636, 6443
26. Ledger : currently barely more than a stub
27. MegaDocker: dockerize web-app in an nginx container
28. Nextcloud : takes 2 minutes to start after container launch, requires manual setup, never launches fully
29. **Nginx** : needs complete rework
30. PartKeepr :
31. PassCheck :
32. **Pihole** : needs LDAP for auth
33. Piwik : - check funkypenguin
34. Plex : - check funkypenguin
35. **Portainer** : needs LDAP for auth
36. PrivateBin : - check funkypenguin
37. Prometheus : - check funkypenguin
38. **RocketChat** : needs LDAP for auth
39. **Skopos** : needs LDAP for auth
40. **Swarmpit** : needs LDAP for auth
41. Tania :
42. TournamentMango :
43. **Traefik** : needs LDAP for auth
44. VS Code : has serious issuues but theoretically works, needs LDAP for auth if possible
45. **Visualizer**: principle of least access: might need LDAP for auth
46. Wallabag : - check funkypenguin
47. WebDAV : is not connectable, but docker reports as running
48. **WordPress** : needs LDAP for auth
49. YTDL-webserver :
50. Zulip :
