var longestCommonSubsequence = function (text1, text2) {
  const commonLetterArray = [];
  let startIndex = 0;
  //text1の各要素について、text2で同じものがあるかをチェックする。ただし、text2で見つかった場合は、次のtext1の要素ループでは、text2は次のindexから探す。
  for (let letter of text1) {
    for (let i = startIndex; i < text2.length; i++) {
      if (letter === text2[i]) {
        commonLetterArray.push([text2[i], i]);
        startIndex = i + 1;
      }
    }
  }
  return commonLetterArray;
};

console.log(longestCommonSubsequence("ezupkr", "ubmrapg")); //順番が正しくないといけない
console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy")); //一番長いsubsequenceでないといけない
