if(arguments[0]) {
    smalltalk.Importer._new()._import_(read(arguments[0])._stream());
}

if(arguments[1]) {
    print(smalltalk.Exporter._new()._exportCategory_(arguments[1]));
}



