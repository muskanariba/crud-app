

// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getDatabase, set, ref, get, remove, update, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBTOo3eTBWXj27qPWSnklZqQS4RzItaMXI",
//   authDomain: "fir-ca5d2.firebaseapp.com",
//   projectId: "fir-ca5d2",
//   storageBucket: "fir-ca5d2.firebasestorage.app",
//   messagingSenderId: "141986833725",
//   appId: "1:141986833725:web:6e90792f61317ce8df1154",
//   measurementId: "G-PSPVBDCX1E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// // Reference to notify div and post button
// const notify = document.querySelector('.notify');
// const addpostbtn = document.querySelector('#post_btn');

// // Add post function
// function AddPost() {
//   const title = document.querySelector('#title').value;
//   const postcontent = document.querySelector('#post_content').value;

//   if (title === '' || postcontent === '') {
//     notify.innerHTML = "Title and Post content are required.";
//     return;
//   }

//   const id = Math.floor(Math.random() * 10000);  // Use a larger range to avoid duplicates

//   // Add data to Firebase Realtime Database
//   set(ref(db, 'posts/' + id), {
//     title: title,
//     postcontent: postcontent
//   }).then(() => {
//     notify.innerHTML = "Post added successfully!";
//     document.querySelector('#title').value = "";
//     document.querySelector('#post_content').value = "";
//   }).catch((error) => {
//     notify.innerHTML = `Error: ${error.message}`;
//   });
// }

// // Event listener for the Post button
// addpostbtn.addEventListener('click', AddPost);

// // Get data from Firebase
// function getpostdata() {
//   const user_ref = ref(db, 'posts/');
//   get(user_ref).then((snapshot) => {
//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       let html = "";
//       const table = document.querySelector('table');

//       for (const key in data) {
//         const { title, postcontent } = data[key];
//         html += `
//           <tr>
//             <td><span class="postnum">${key}</span></td>
//             <td>${title}</td>
//             <td><button class="delete" onclick="deletedata('${key}')">Delete</button></td>
//             <td><button class="update" onclick="updatedata('${key}')">Update</button></td>
//           </tr>
//         `;
//       }

//       // Insert the constructed HTML into the table
//       table.innerHTML = html;
//     } else {
//       notify.innerHTML = "No data available";
//     }
//   }).catch((error) => {
//     notify.innerHTML = `Error: ${error.message}`;
//   });
// }

// // Fetch and display posts on initial load
// getpostdata();

// // Real-time listener for updates to the posts
// const user_ref = ref(db, 'posts/');
// onValue(user_ref, (snapshot) => {
//   if (snapshot.exists()) {
//     const data = snapshot.val();
//     let html = "";
//     const table = document.querySelector('table');

//     for (const key in data) {
//       const { title, postcontent } = data[key];
//       html += `
//         <tr>
//           <td><span class="postnum">${key}</span></td>
//           <td>${title}</td>
//           <td><button class="delete" onclick="deletedata('${key}')">Delete</button></td>
//           <td><button class="update" onclick="updatedata('${key}')">Update</button></td>
//         </tr>
//       `;
//     }

//     // Insert the constructed HTML into the table
//     table.innerHTML = html;
//   } else {
//     notify.innerHTML = "No data available";
//   }
// });

// // Function to delete post
// window.deletedata = function(key) {
//   remove(ref(db, 'posts/' + key))
//     .then(() => {
//       notify.innerHTML = "Post deleted successfully!";
//     })
//     .catch((error) => {
//       notify.innerHTML = `Error: ${error.message}`;
//     });
// };

// // Function to update post
// window.updatedata = function(key) {
//   const user_ref = ref(db, `posts/${key}`);
//   get(user_ref).then((snapshot) => {
//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       document.querySelector('#title').value = data.title;
//       document.querySelector('#post_content').value = data.postcontent;

//       const update_btn = document.querySelector('.update_btn');
//       update_btn.classList.add('show');  // Show the update button
//       document.querySelector('.post_btn').classList.add('hide');  // Hide the post button

//       const post_btn = document.querySelector('.post_btn'); // reference to the post button

//       // Handle the update functionality
//       const updateForm = function updateform() {
//         const title = document.querySelector('#title').value;
//         const postcontent = document.querySelector('#post_content').value;

//         update(ref(db, `posts/${key}`), {
//           title: title,
//           postcontent: postcontent
//         }).then(() => {
//           document.querySelector('#title').value = "";
//           document.querySelector('#post_content').value = "";
//           update_btn.classList.remove('show'); // Hide update button
//           post_btn.classList.remove('hide'); // Show post button
//           notify.innerHTML = "Post updated successfully!";
//         }).catch((error) => {
//           notify.innerHTML = `Error: ${error.message}`;
//         });
//       };

//       // Remove any existing event listener before adding a new one
//       update_btn.removeEventListener('click', updateForm);

//       // Add new event listener
//       update_btn.addEventListener('click', updateForm);
//     }
//   }).catch((error) => {
//     notify.innerHTML = `Error: ${error.message}`;
//   });
// };



import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, set, ref, get, remove, update, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTOo3eTBWXj27qPWSnklZqQS4RzItaMXI",
  authDomain: "fir-ca5d2.firebaseapp.com",
  projectId: "fir-ca5d2",
  storageBucket: "fir-ca5d2.firebasestorage.app",
  messagingSenderId: "141986833725",
  appId: "1:141986833725:web:6e90792f61317ce8df1154",
  measurementId: "G-PSPVBDCX1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Reference to notify div and post button
const notify = document.querySelector('.notify');
const addpostbtn = document.querySelector('#post_btn');

// Add post function
function AddPost() {
  const title = document.querySelector('#title').value;
  const postcontent = document.querySelector('#post_content').value;

  if (title === '' || postcontent === '') {
    notify.innerHTML = "Title and Post content are required.";
    return;
  }

  const id = Math.floor(Math.random() * 10000);  // Use a larger range to avoid duplicates

  // Add data to Firebase Realtime Database
  set(ref(db, 'posts/' + id), {
    title: title,
    postcontent: postcontent
  }).then(() => {
    notify.innerHTML = "Post added successfully!";
    document.querySelector('#title').value = "";
    document.querySelector('#post_content').value = "";
  }).catch((error) => {
    notify.innerHTML = `Error: ${error.message}`;
  });
}

// Event listener for the Post button
addpostbtn.addEventListener('click', AddPost);

// Get data from Firebase (without displaying post ID)
function getpostdata() {
  const user_ref = ref(db, 'posts/');
  get(user_ref).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      let html = "";
      const table = document.querySelector('table');

      for (const key in data) {
        const { title, postcontent } = data[key];
        html += `
          <tr>
            <td>${title}</td>
            <td>${postcontent}</td>
            <td><button class="delete" onclick="deletedata('${key}')">Delete</button></td>
            <td><button class="update" onclick="updatedata('${key}')">Update</button></td>
          </tr>
        `;
      }

      // Insert the constructed HTML into the table
      table.innerHTML = html;
    } else {
      notify.innerHTML = "No data available";
    }
  }).catch((error) => {
    notify.innerHTML = `Error: ${error.message}`;
  });
}

// Fetch and display posts on initial load
getpostdata();

// Real-time listener for updates to the posts (without displaying post ID)
const user_ref = ref(db, 'posts/');
onValue(user_ref, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    let html = "";
    const table = document.querySelector('table');

    for (const key in data) {
      const { title, postcontent } = data[key];
      html += `
        <tr>
          <td>${title}</td>
          <td>${postcontent}</td>
          <td><button class="delete" onclick="deletedata('${key}')">Delete</button></td>
          <td><button class="update" onclick="updatedata('${key}')">Update</button></td>
        </tr>
      `;
    }

    // Insert the constructed HTML into the table
    table.innerHTML = html;
  } else {
    notify.innerHTML = "No data available";
  }
});

// Function to delete post
window.deletedata = function(key) {
  remove(ref(db, 'posts/' + key))
    .then(() => {
      notify.innerHTML = "Post deleted successfully!";
    })
    .catch((error) => {
      notify.innerHTML = `Error: ${error.message}`;
    });
};

// Function to update post
window.updatedata = function(key) {
  const user_ref = ref(db, `posts/${key}`);
  get(user_ref).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.querySelector('#title').value = data.title;
      document.querySelector('#post_content').value = data.postcontent;

      const update_btn = document.querySelector('.update_btn');
      update_btn.classList.add('show');  // Show the update button
      document.querySelector('.post_btn').classList.add('hide');  // Hide the post button

      const post_btn = document.querySelector('.post_btn'); // reference to the post button

      // Handle the update functionality
      const updateForm = function updateform() {
        const title = document.querySelector('#title').value;
        const postcontent = document.querySelector('#post_content').value;

        update(ref(db, `posts/${key}`), {
          title: title,
          postcontent: postcontent
        }).then(() => {
          document.querySelector('#title').value = "";
          document.querySelector('#post_content').value = "";
          update_btn.classList.remove('show'); // Hide update button
          post_btn.classList.remove('hide'); // Show post button
          notify.innerHTML = "Post updated successfully!";
        }).catch((error) => {
          notify.innerHTML = `Error: ${error.message}`;
        });
      };

      // Remove any existing event listener before adding a new one
      update_btn.removeEventListener('click', updateForm);

      // Add new event listener
      update_btn.addEventListener('click', updateForm);
    }
  }).catch((error) => {
    notify.innerHTML = `Error: ${error.message}`;
  });
};
