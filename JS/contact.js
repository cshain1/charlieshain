<script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
<script>
  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/mwkjzywa",
    title: "Get in touch:",
    fields: [
      { 
        type: "name", 
        label: "Your name:", 
        name: "name",
        required: true,
        placeholder: "Your name"
      },
      { 
        type: "email", 
        label: "Your email:", 
        name: "email",
        required: true,
        placeholder: "Your email"
      },
      {
        type: "textarea",
        label: "Your message:",
        name: "message",
        placeholder: "Type your message",
      },
      { 
        type: "submit",
        style: {
          backgroundColor: "#9D8771",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        },
      }      
    ],
    styles: {
      title: {
        backgroundColor: "#f5f5f5",
        color: "#333",
        marginBottom: "20px"
      },
      buttonStyle: {
        backgroundColor: "#9D8771",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "4px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
      },
    }
  });
</script>

 
