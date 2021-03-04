#!/bin/sh

reindexmanikins() {
    declare -i manikinIndex=10000;
    for manikin in ./src/mobparts/manikins/*.ts;
        do sed -i '' "s/  manikinIndex: .....,/  manikinIndex: ${manikinIndex},/" ${manikin};
        ((manikinIndex++));
    done;
        ((manikinIndex--));
    echo "manikins indexed from 10000 to $manikinIndex"
}

reindexmemories() {
    declare -i memoryIndex=20000;
    for memory in ./src/mobparts/memories/*.ts;
        do sed -i '' "s/  memoryIndex: .....,/  memoryIndex: ${memoryIndex},/" ${memory};
        ((memoryIndex++));
    done;
        ((memoryIndex--));
    echo "memories indexed from 20000 to $memoryIndex"
}

reindexservicemites() {
    declare -i servicemiteIndex=30000;
    for servicemite in ./src/mobparts/mites/service/*.ts;
        do sed -i '' "s/  miteIndex: .....,/  miteIndex: ${servicemiteIndex},/" ${servicemite};
        ((servicemiteIndex++));
    done;
        ((servicemiteIndex--));
    echo "service mites indexed from 30000 to $servicemiteIndex"
}

reindexnetworkmites() {
    declare -i networkmiteIndex=40000;
    for networkmite in ./src/mobparts/mites/network/*.ts;
        do sed -i '' "s/  miteIndex: .....,/  miteIndex: ${networkmiteIndex},/" ${networkmite};
        ((networkmiteIndex++));
    done;
        ((networkmiteIndex--));
    echo "network mites indexed from 40000 to $networkmiteIndex"
}

reindexcustommites() {
    declare -i custommiteIndex=50000;
    for custommite in ./src/mobparts/mites/custom/*.ts;
        do sed -i '' "s/  miteIndex: .....,/  miteIndex: ${custommiteIndex},/" ${custommite};
        ((custommiteIndex++));
    done;
        ((custommiteIndex--));
    echo "custom mites indexed from 50000 to $custommiteIndex"
}

reindexproject() {
    reindexmanikins
    reindexmemories
    reindexservicemites
    reindexnetworkmites
    reindexcustommites
}

reindexproject