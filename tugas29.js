console.log("REGEX EXEC\n===================================");

function regex() {
  let data = "Belajar menimba ilmu programming bersama Niomic";
  let data2 = new RegExp("bersama");

  console.log(data2.exec(data));

  console.log("atau");

  console.log(new RegExp("bersama").exec(data));
}

regex();
