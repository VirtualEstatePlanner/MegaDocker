#!/bin/sh

if [ "${USER}" != "root" ]; then
echo "$0 must be run as root!"
exit 2
fi

VBoxManage stop $(VBoxManage list vms)
sudo killall VBoxNetDHCP
sudo killall VBoxXPCOMIPCD
export PATH="/bin:/usr/bin:/sbin:/usr/sbin:$PATH"
my_files+=("${HOME}/Library/LaunchAgents/org.virtualbox.vboxwebsrv.plist")
my_directories+=("/Library/startupItems/VirtualBox/")
my_directories+=("/Library/Receipts/VBoxstartupItems.pkg/")
my_directories+=("/Library/Application support/VirtualBox/LaunchDaemons/")
my_directories+=("/Library/Application support/VirtualBox/VBoxDrv.kext/")
my_directories+=("/Library/Application support/VirtualBox/VBoxUsB.kext/")
my_directories+=("/Library/Application support/VirtualBox/VBoxNetFlt.kext/")
my_directories+=("/Library/Application support/VirtualBox/VBoxNetAdp.kext/")
my_directories+=("/Library/Extensions/VBoxDrv.kext/")
my_directories+=("/Library/Extensions/VBoxUsB.kext/")
my_directories+=("/Library/Extensions/VBoxNetFlt.kext/")
my_directories+=("/Library/Extensions/VBoxNetAdp.kext/")
my_directories+=("/Library/Extensions/VBoxDrvTiger.kext/")
my_directories+=("/Library/Extensions/VBoxUsBTiger.kext/")
my_directories+=("/Library/Receipts/VBoxKEXTs.pkg/")
my_files+=("/usr/bin/VirtualBox")
my_files+=("/usr/bin/VBoxManage")
my_files+=("/usr/bin/VBoxVRDP")
my_files+=("/usr/bin/VBoxHeadless")
my_files+=("/usr/bin/vboxwebsrv")
my_files+=("/usr/bin/VBoxBugReport")
my_files+=("/usr/bin/VBoxBalloonCtrl")
my_files+=("/usr/bin/VBoxAutostart")
my_files+=("/usr/bin/VBoxDTrace")
my_files+=("/usr/bin/vbox-img")
my_files+=("/usr/local/bin/VirtualBox")
my_files+=("/usr/local/bin/VBoxManage")
my_files+=("/usr/local/bin/VBoxVRDP")
my_files+=("/usr/local/bin/VBoxHeadless")
my_files+=("/usr/local/bin/vboxwebsrv")
my_files+=("/usr/local/bin/VBoxBugReport")
my_files+=("/usr/local/bin/VBoxBalloonCtrl")
my_files+=("/usr/local/bin/VBoxAutostart")
my_files+=("/usr/local/bin/VBoxDTrace")
my_files+=("/usr/local/bin/vbox-img")
my_directories+=("/Library/Receipts/VirtualBoxCLI.pkg/")
my_files+=("/Library/LaunchDaemons/org.virtualbox.startup.plist")
my_directories+=("/Applications/VirtualBox.app/")
my_directories+=("/Library/Receipts/VirtualBox.pkg/")
my_directories+=("/Library/Receipts/VBoxDrv.pkg/")
my_directories+=("/Library/Receipts/VBoxUsB.pkg/")

python_versions="2.3 2.5 2.6 2.7"
for p in $python_versions; do
my_files+=("/Library/Python/$p/site-packages/vboxapi/VirtualBox_constants.py")
my_files+=("/Library/Python/$p/site-packages/vboxapi/VirtualBox_constants.pyc")
my_files+=("/Library/Python/$p/site-packages/vboxapi/__init__.py")
my_files+=("/Library/Python/$p/site-packages/vboxapi/__init__.pyc")
my_files+=("/Library/Python/$p/site-packages/vboxapi-1.0-py$p.egg-info")
my_directories+=("/Library/Python/$p/site-packages/vboxapi/")
done

#Declare -a my_kexts
for kext in org.virtualbox.kext.VBoxUsB org.virtualbox.kext.VBoxNetFlt org.virtualbox.kext.VBoxNetAdp org.virtualbox.kext.VBoxDrv; do
if /usr/sbin/kextstat -b $kext -l | grep -q $kext; then
my_kexts+=("$kext")
fi
done

my_pb='org\.virtualbox\.pkg\.'
my_pkgs=`/usr/sbin/pkgutil --pkgs="${my_pb}vboxkexts|${my_pb}vboxstartupitems|${my_pb}virtualbox|${my_pb}virtualboxcli"`

if test -z "${my_directories[*]}"  -a  -z "${my_files[*]}"   -a  -z "${my_kexts[*]}"  -a  -z "$my_pkgs"; then
exit 0;
fi

my_processes="`ps -axco 'pid uid command' | grep -wEe '(VirtualBox|VirtualBoxVM|VBoxManage|VBoxHeadless|vboxwebsrv|VBoxXPCOMIPCD|VBoxsVC|VBoxNetDHCP|VBoxNetNAT)' | grep -vw grep | grep -vw VirtualBox_Uninstall.tool | tr '\n' '\a'`";
if test -n "$my_processes"; then
echo ""
echo 'Warning! Found the following active VirtualBox processes:'
echo "$my_processes" | tr '\a' '\n'
echo ""
echo "We recommend that you quit all VirtualBox processes before"
echo "uninstalling the Product."
echo ""
fi

LSREGISTER=/system/Library/Frameworks/Coreservices.framework/Versions/A/Frameworks/Launchservices.framework/Versions/A/support/LSREGISTER
if [ -e ${LSREGISTER} ]; then
${LSREGISTER} -u /Applications/VirtualBox.app > /Dev/null
${LSREGISTER} -u /Applications/VirtualBox.app/Contents/Resources/vmstarter.app > /Dev/null
sudo rm -rf /Applications/VirtualBox.app
fi

for my_pkg in $my_pkgs; do
/usr/bin/sudo -p "Please enter %u's password (ReMoving $my_pkg):" /usr/sbin/pkgutil --forget "$my_pkg"
done
sudo rm -rf /Application/VirtualBox.app
exit 0

