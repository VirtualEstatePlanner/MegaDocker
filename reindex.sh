#!/bin/sh

reindexmanikins() {
    declare -i manikinIndex=10000;
    for file in ./src/mobparts/manikins/*.ts;
        do sed -i '' "s/  manikinIndex: ..,/  manikinIndex: ${manikinIndex},/" ${file};
        ((manikinIndex++));
    done;
}

reindexmemories() {
    declare -i memoryIndex=20000;
    for file in ./src/mobparts/mite/network*.ts;
        do sed -i '' "s/  memoryIndex: ....,/  memoryIndex: ${memoryIndex},/" ${file};
        ((memoryIndex++));
    done;
}

reindexservicemites() {
    declare -i servicemiteIndex=30000;
    for file in ./src/mobparts/mite/service/*.ts;
        do sed -i '' "s/  miteIndex: ....,/  miteIndex: ${servicemiteIndex},/" ${file};
        ((servicemiteIndex++));
    done;
}

reindexnetworkmites() {
    declare -i networkmiteIndex=40000;
    for file in ./src/mobparts/mite/network*.ts;
        do sed -i '' "s/  miteIndex: ....,/  miteIndex: ${networkmiteIndex},/" ${file};
        ((networkmiteIndex++));
    done;
}

reindexcustommites() {
    declare -i networkmiteIndex=50000;
    for file in ./src/mobparts/mite/network*.ts;
        do sed -i '' "s/  miteIndex: ....,/  miteIndex: ${networkmiteIndex},/" ${file};
        ((networkmiteIndex++));
    done;
}


reindexproject() {
    reindexmanikins
    reindexservicemites
    reindexnetworkmites
    reindexcustommites
    reindexmemories
}