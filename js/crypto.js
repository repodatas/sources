    function submitLoginForm(event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var hashedUsername = CryptoJS.SHA256(username).toString();
	   var hashedPassword = CryptoJS.SHA256(password).toString();
      if (hashedUsername === "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918" && 
	  hashedPassword === "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4") {  
		document.getElementById("login").style.display = "none";
		document.getElementById("contract").style.display = "block";
		document.getElementById("loginForm").reset();
        document.getElementById("loginError").innerHTML = "";
	
      } else {
        document.getElementById("loginError").innerHTML = "Tên đăng nhập hoặc mật khẩu không chính xác.";
      }
    }

    function submitContractForm(event) {
      event.preventDefault();
      var contractName = document.getElementById("cdvntd").value;
	   copyToClipboard("8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");
      alert("Gửi hợp đồng thành công!");
      document.getElementById("contractForm").reset();
      document.getElementById("contractError").innerHTML = "";
    }
	
	
	function copyToClipboard(text) {
      var tempInput = document.createElement("textarea");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }