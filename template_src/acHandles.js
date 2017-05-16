module.exports = (env) => {
  return {
    alert(line, index){
      if(env.alert){
        return `alert("${line}")`;
      }

      return "";
    }
  }
}
