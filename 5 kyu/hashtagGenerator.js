function generateHashtag (str) {
    if (str === '') return false;
    let hashtag = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
     if( hashtag.length > 139 || hashtag === '') return false
    
       return `#${hashtag}`;
}