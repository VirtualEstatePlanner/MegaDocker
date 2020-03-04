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
8. ELK : needs kibana.yml output custom mite for configuration
9. E-mail : needs Traefik tcp forwarding for 25, 587, 993 and super-requires LDAP
10. Getter: - check funkypenguin for nzbget, rtorrent, sonarr, radarr, mylar, lazylibrarian, headphones, lidarr, nzbhydra, ombi,
11. **Ghost** : needs LDAP for auth
12. GitLab : needs tcp forwarding for 22
13. Grafana : - check funkypenguin
14. **Heimdall** : I wish there was a way to autopopulate the stuff in traefik, but we probably need a customMite to be generated at zip time
15. Huginn : - check funkypenguin
16. **Kanboard** : - needs LDAP for auth
17. LDAP : needs tcp forwarding for 389, 636, 6443
18. Ledger : currently barely more than a stub
19. MegaDocker: dockerize web-app
20. Nextcloud : takes 2 minutes to start after container launch, requires manual setup, never launches fully
21. **Nginx** : needs complete rework
22. Owncloud : might be a nextcloud copy
23. **Pihole** : needs LDAP for auth
24. Piwik : - check funkypenguin
25. Plex : - check funkypenguin
26. **Portainer** : needs LDAP for auth
27. PrivateBin : - check funkypenguin
28. Prometheus : - check funkypenguin
29. RocketChat : has some issue connecting to mongo database
30. **Skopos** : needs LDAP for auth
31. **Swarmpit** : needs LDAP for auth
32. **Traefik** : needs LDAP for auth
33. **VS Code** : has serious issuues but theoretically works, wants LDAP for auth if possible
34. **Visualizer**: principle of least access: might need LDAP for auth
35. Wallabag : - check funkypenguin
36. WebDAV : is not connectable, but docker reports as running
37. **WordPress** : needs LDAP for auth
