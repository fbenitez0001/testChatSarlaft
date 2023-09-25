var conversationalForm = window.cf.ConversationalForm.startTheConversation({
  formEl: document.getElementById("form"),
  context: document.getElementById("cf-context"),
  userImage: "text:ME",
  robotImage: "src/Favicon-8.png",
  submitCallback: function () {
    alert(
      "Custom submit callback reached, removing Conversational Form, see markup of this file"
    );
  },
  showProgressBar: true,
  preventAutoFocus: true,

});
