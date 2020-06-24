// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBWbdCKbT9ptU0EqUiRasLF-MwATqu3CTc",
	authDomain: "faizanlawassociates.firebaseapp.com",
	databaseURL: "https://faizanlawassociates.firebaseio.com",
	projectId: "faizanlawassociates",
	storageBucket: "faizanlawassociates.appspot.com",
	messagingSenderId: "697400413694",
	appId: "1:697400413694:web:ce259f77da66bb4b80c4af",
	measurementId: "G-72626SGK48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");


// Listen for contact form submit
document.getElementById("form").addEventListener('submit', submitForm);


// Submit Form
function submitForm(e) {
	e.preventDefault();

	// Get values
	var name = getInputVal("name");
	var email = getInputVal("email");
	var cases = getInputVal("case");
	var message = getInputVal("message");

	// Save message
	saveMessage(name, email, cases, message);


	// Show Alert
	document.querySelector(".alert").style.display = "block";

	// Hide alert after 3seconds
	setTimeout(() => {
		document.querySelector(".alert").style.display = "none";
	}, 3000);
}

// Function to get form values
function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, cases, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		case: cases,
		message: message
	});
}