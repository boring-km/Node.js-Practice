function createImage(name) {
    if(name.match(/\.jpeg$/)) {
        return new JpegImage(name);
    } else if(name.match(/\.gif$/)) {
        return new GifImage(name);
    } else if(name.match(/\.png$/)) {
        return new PngImage(name);
    } else {
        throw new Exception('Unsupported format');
    }
}