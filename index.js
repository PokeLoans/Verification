
const express = require("express");``
const axios = require("axios");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client
  .login(
    "MTM1MjQyOTk5Mzg1NDExMTgyNw.GUD-uQ.6Y4JgF7mX3s_5K1JWp-XkrKKsgZRTtInM9asvY",
  )
  .then(() => {
    console.log(`Logged in as ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Failed to log in:", err);
  });

// Use environment variables from .env (if available)

const guildId = "1324065119352918036";
const CLIENT_ID = "1352429993854111827";
const CLIENT_SECRET = "-Tc8uDES6mKVdLs1DZ29G0jY93mPciq0";
const REDIRECT_URI =
  "https://github.com/PokeLoans/Verification.git";
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "87.138.168.72",
  user: "u4438_M00GT49rP5",
  port: 3306,
  password: "zP!QQ^lkOwLTSLo^C2uKcP9d",
  database: "s4438_PokeLoansDB",
});

console.log(`Your bot's public URL: ${REDIRECT_URI}`);


// Create a new table for storing IP addresses
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS user_ips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(50),
    ip VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;


db.query(createTableQuery, (err, result) => {
  if (err) {
    console.error("Error creating table:", err);
    return res.send("Error: Could not create table");
  }

  // Serve static files from the "public" directory
  app.use(express.static("public"));
  app.use(cookieParser());

  // Serve simple index.html page on root route
  app.get("/", (req, res) => {
    res.send(`
             <html lang="en">
             <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <title>PokeLoans Rules</title>
                 <style>
                     body {
                         font-family: Arial, sans-serif;
                         margin: 20px;
                         padding: 20px;
                         background-color: #f9f9f9;
                     }
                     .container {
                         max-width: 700px;
                         margin: auto;
                         background: white;
                         padding: 20px;
                         border-radius: 10px;
                         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                     }
                     h1, h2 {
                         color: #cb499e;
                     }
                     .rules {
                         max-height: 300px;
                         overflow-y: auto;
                         padding: 10px;
                         border: 1px solid #ccc;
                         margin-bottom: 15px;
                         background-color: #fff;
                     }
                     .agree-section {
                         text-align: center;
                         margin-top: 20px;
                     }
                     button {
                         background-color: #cb499e;
                         color: white;
                         border: none;
                         padding: 10px 15px;
                         font-size: 16px;
                         cursor: not-allowed;
                         border-radius: 5px;
                         opacity: 0.5;
                     }
                     button.enabled {
                         cursor: pointer;
                         opacity: 1;
                     }
                 </style>
             </head>
             <body>
                 <div class="container">
                     <img src="https://i.imgur.com/bhZ9PNz.png" alt="PokeLoans Logo" style="width: 100%; max-width: 700px; margin-bottom: 20px;">
                     <h1>Welcome to PokeLoans</h1>
                     <h2>Please Read and Accept the Rules</h2>
                     <div class="rules">
                         <h3>Loan Rules:</h3>
                         <ul>
                             <li><strong>No Scamming:</strong> Any attempt to scam results in an immediate blacklist.</li>
                             <li><strong>Loan Repayment Policy:</strong> Loans must be repaid in full and on time.</li>
                             <li><strong>No Fees Before Loan:</strong> Lenders cannot charge fees before the full loan is sent.</li>
                             <li><strong>No Server Liability:</strong> The server is not responsible for scams.</li>
                             <li><strong>Legal Action:</strong> You can report scammers to authorities.</li>
                         </ul>

                         <h3>Server Rules:</h3>
                         <ul>
                             <li><strong>No Harassment or Bullying:</strong> Respect all members.</li>
                             <li><strong>No NSFW Content:</strong> Keep the server appropriate.</li>
                             <li><strong>No Spam or Advertising:</strong> Do not promote or send excessive messages.</li>
                             <li><strong>No Unnecessary Pings:</strong> Don't abuse @everyone or mod pings.</li>
                             <li><strong>No Hacking or Bot Misuse:</strong> Any hacking attempts will result in immediate action.</li>
                             <li><strong>Respect Server Guidelines:</strong> Misbehavior outside the server may also lead to blacklisting.</li>
                             <li><strong>One Account Per Person:</strong> No multiple accounts.</li>
                             <li><strong>No Unsolicited DMs:</strong> Do not DM members without permission.</li>
                         </ul>
                     </div>
                     <div class="agree-section">
                         <input type="checkbox" id="agreeCheckbox"> I agree to these rules
                         <br><br>
                         <button id="continueBtn" disabled>Continue</button>
                     </div>
                 </div>

                 <script>
                     const checkbox = document.getElementById("agreeCheckbox");
                     const button = document.getElementById("continueBtn");

                     checkbox.addEventListener("change", function() {
                         if (checkbox.checked) {
                             button.disabled = false;
                             button.classList.add("enabled");
                         } else {
                             button.disabled = true;
                             button.classList.remove("enabled");
                         }
                     });

                     button.addEventListener("click", function() {
                         if (checkbox.checked) {
                             window.location.href = "/notepage"; // Replace with your actual welcome page URL
                         }
                     });
                 </script>
             </body>
             </html>`);
});

  // Serve simple index.html page on root route
  app.get("/notepage", (req, res) => {
    res.send(`
    <html>
      <head>
        <title>PokeLoan Login</title>
        <style>
          body {
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f0f0;
          }
          .container {
            text-align: center;
          }
          img {
            width: 200px;
            margin-bottom: 20px;
          }
          button {
            background-color: #4CAF50;
            color: white;
            padding: 15px 32px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .subtext {
            border: 2px solid lightgreen;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 0;
          }
          .warning {
            border: 2px solid red;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 0;
            color: red;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <p>Open URL: <a href="${REDIRECT_URI}" target="_blank">Click here</a></p>


          <a href='/login'><img src="https://i.imgur.com/IKawvmK.jpeg" alt="PokeLoan Logo"></a>
          <h1>Welcome to PokeLoan!</h1>

          <div class="subtext">
            <ul>
              <li><strong>Login with your main Discord account only</strong></li>
              <li><strong>One account per person</strong> — You cannot change your account once you log in.</li>
              <li><strong>Profile picture is required</strong></li>
              <li><strong>No VPNs allowed during screening</strong></li>
            </ul>
          </div>

          <div class="warning">
            <p><strong>⚠ You only get one chance in this server. If you scam or break the rules, you won't be able to rejoin. ⚠</strong></p>
          </div>

          <a href='/login'><button>Login with Discord</button></a>
        </div>
      </body>
    </html>
  `);
  });

  // Route for logging in via Discord
  app.get("/login", (req, res) => {
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify`;
    res.redirect(authUrl);
  });

  // Callback route after successful authorization
  app.get("/callback", async (req, res) => {
    const { code } = req.query;
    if (!code) return res.send("Error: No code provided");

    try {
      // Exchange authorization code for an access token
      const tokenResponse = await axios.post(
        "https://discord.com/api/oauth2/token",
        new URLSearchParams({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          grant_type: "authorization_code",
          redirect_uri: REDIRECT_URI,
          scope: "identify",
        }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
      );

      const accessToken = tokenResponse.data.access_token;

      const userResponse = await axios.get(
        "https://discord.com/api/users/@me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      const userData = userResponse.data;

      // Check if user has a custom avatar or is using the default one
      const isDefaultAvatar =
        !userData.avatar || userData.avatar.startsWith("a_");

      if (isDefaultAvatar) {
        // User does not have a profile picture
        res.send(`
        <html>
          <head>
            <title>PokeLoan Login</title>
            <style>
              body {
                font-family: sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background-color: #f0f0f0;
              }
              .container {
                text-align: center;
              }
              img {
                width: 200px;
                margin-bottom: 20px;
              }
              button {
                background-color: #4CAF50;
                color: white;
                padding: 15px 32px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
              .subtext {
                border: 2px solid lightgreen;
                border-radius: 5px;
                padding: 10px;
                margin: 10px 0;
              }
              .error {
                border: 2px solid red;
                border-radius: 5px;
                padding: 10px;
                margin: 10px 0;
                color: red;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="error">
                <p>Screening Failed!</p>
                <p>You need a profile picture on your Discord account</p>
              </div>
            </div>
          </body>
        </html>
      `);
        return;
      }

      // Check if the user is using a VPN
      // TODO: Add logic to detect VPN usage (this is a complex task)
      let isUsingVPN = false; // Ensure isUsingVPN is properly defined
      vpnApiKey = "9fiaz0uanaa7gmhmtrlg4zfbr2hqi7wh";

      if (vpnApiKey) {

        try {
          // Get the user's IP address
          const userIP =
            req.headers["x-forwarded-for"]?.split(",")[0] ||
            req.connection.remoteAddress;

          if (userIP) {

            // Make a request to ProxyCheck.io to check VPN status
            const vpnResponse = await axios.get(
              `https://proxycheck.io/v2/${userIP}?key=${vpnApiKey}&vpn=1&asn=1&node=1&time=1`,
            );

            // Ensure the response format is correct before accessing properties
            if (vpnResponse.data && vpnResponse.data[userIP]) {
              isUsingVPN = vpnResponse.data[userIP].proxy === "yes"; // ProxyCheck.io uses "proxy": "yes" for VPNs
            } else {
              console.warn("Unexpected API response format:", vpnResponse.data);
            }
          } else {
            console.warn("Could not retrieve user IP.");
          }
        } catch (error) {
          console.error("Error checking VPN usage:", error);
        }
      }

      // Block users if they are using a VPN
      if (isUsingVPN) {
        // User is using a VPN
        res.send(`
            <html>
              <head>
                <title>PokeLoan Login</title>
                <style>
                  body {
                    font-family: sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f0f0f0;
                  }
                  .container {
                    text-align: center;
                  }
                  img {
                    width: 200px;
                    margin-bottom: 20px;
                  }
                  button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 15px 32px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                  }
                  .subtext {
                    border: 2px solid lightgreen;
                    border-radius: 5px;
                    padding: 10px;
                    margin: 10px 0;
                  }
                  .error {
                    border: 2px solid red;
                    border-radius: 5px;
                    padding: 10px;
                    margin: 10px 0;
                    color: red;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="error">
                    <p>Screening Failed!</p>
                    <p>VPNs are not allowed during the screening process</p>
                  </div>
                </div>
              </body>
            </html>
          `);
        return;
      }

      res.cookie("user", JSON.stringify(userData)); // Store user data in cookie
      res.redirect("/dashboard"); // Redirect to dashboard page
    } catch (error) {
      console.error(error);
      res.send("Login failed");
    }
  });

  // Function to update user roles in Discord
  async function updateUserRoles(userId, guildId, isBlacklisted) {
    try {
      // Fetch the guild
      const guild = await client.guilds.fetch(guildId);
      if (!guild) throw new Error("Guild not found");

      // Fetch the member
      const member = await guild.members.fetch(userId);
      if (!member) throw new Error("Member not found");

      // Role IDs
      const removeRoleId = "1352423353327026206"; // Role to remove
      const blacklistRoleId = "1324335028297138216"; // Role to add if blacklisted

      // Remove role if the user has it
      if (member.roles.cache.has(removeRoleId)) {
        await member.roles.remove(removeRoleId);
      } else {
        console.log(
          `User ${userId} does not have role ${removeRoleId}, skipping removal.`,
        );
      }

      // Add blacklist role if user is blacklisted
      if (isBlacklisted) {
        if (!member.roles.cache.has(blacklistRoleId)) {
          await member.roles.add(blacklistRoleId);
          console.log(
            `Added blacklist role ${blacklistRoleId} to user ${userId}`,
          );
        } else {
          console.log(
            `User ${userId} already has blacklist role ${blacklistRoleId}`,
          );
        }
      }
    } catch (error) {
      console.error(`Error updating roles: ${error.message}`);
    }
  }


  // Dashboard route after successful login
  app.get("/dashboard", (req, res) => {
      const user = req.cookies.user ? JSON.parse(req.cookies.user) : null;
      if (!user) return res.redirect("/");

      // Prepare the avatar URL
      const avatarURL = user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : "https://cdn.discordapp.com/embed/avatars/0.png"; // Default avatar URL

      // Get the user's IP address
      const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress;

      // Check if the user's ID exists in the user_ips table
      const checkUserIpQuery = `SELECT * FROM user_ips WHERE user_id = ?`;
      db.query(checkUserIpQuery, [user.id], (err, ipResults) => {
          if (err) {
              console.error("Error checking user IP:", err);
              return res.send("Error: Could not check user IP");
          }

          if (ipResults.length > 0) {
              // User ID exists, update IP address
              const updateIpQuery = `UPDATE user_ips SET ip = ? WHERE user_id = ?`;
              db.query(updateIpQuery, [ip, user.id], (err) => {
                  if (err) {
                      console.error("Error updating user IP:", err);
                      return res.send("Error: Could not update user IP");
                  }
                  console.log(`User ${user.id} IP address updated to ${ip}.`);
                  sendWelcomeMessage(); // Proceed to send welcome message
              });
          } else {
              // Check for alt accounts
              const checkIpQuery = `SELECT * FROM user_ips WHERE ip = ?`;
              db.query(checkIpQuery, [ip], (err, results) => {
                  if (err) {
                      console.error("Error checking IP:", err);
                      return res.send("Error: Could not check IP");
                  }

                  if (results.length > 0) {
                      // Alt account detected
                      console.log("Alt account detected!");
                      const blacklistQuery = `INSERT INTO blacklist (user_id, reason, proof) VALUES (?, 'Alt account detected', 'IP address matches another user')`;
                      db.query(blacklistQuery, async (err) => {
                          if (err) {
                              console.error("", err);
                          }
                          console.log(`User ${user.id} has been blacklisted.`);
                          await updateUserRoles(user.id, guildId, true); // Assign the blacklist role
                          return res.send(createBlacklistMessage(user, avatarURL)); // Send blacklist message
                      });
                  } else {
                      // Insert new IP
                      console.log(`User ${user.id} does not exist in user_ips table, inserting new entry...`);
                      const insertQuery = `INSERT INTO user_ips (user_id, ip) VALUES (?, ?)`;
                      db.query(insertQuery, [user.id, ip], (err) => {
                          if (err) {
                              console.error("Error inserting user IP:", err);
                              return res.send("Error: Could not insert user IP");
                          }
                          console.log(`New IP recorded for user ${user.id}.`);
                          sendWelcomeMessage(); // Proceed to send welcome message
                      });
                  }
              });
          }

          function sendWelcomeMessage() {
              const welcomeMessage = createWelcomeMessage(user, avatarURL);
              return res.send(welcomeMessage);
          }

          function createBlacklistMessage(user, avatarURL) {
              return `
                  <html>
                      <head>
                          <title>Blacklist Notification</title>
                          <style>
                              body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f0f0; }
                              .container { text-align: center; }
                              .warning { border: 2px solid red; border-radius: 5px; padding: 20px; margin: 10px; color: red; font-weight: bold; background-color: #fff0f0; }
                              .details { border: 2px solid lightgreen; border-radius: 10px; padding: 15px; margin: 10px 0; background-color: #f0fff0; text-align: left; }
                              img { width: 100px; border-radius: 50%; }
                          </style>
                      </head>
                      <body>
                          <div class="container">
                              <h1>You are being blacklisted!</h1>
                              <div class="warning">
                                  <p>You are being blacklisted for bringing an alt account. Please use your main Discord account.</p>
                              </div>
                              <div class="details">
                                  <p><strong>ID:</strong> ${user.id}</p>
                                  <p><strong>Username:</strong> ${user.username}</p>
                                  <p><strong>Thumbnail:</strong></p>
                                  <img src="${avatarURL}" alt="Profile Picture">
                              </div>
                          </div>
                      </body>
                  </html>
              `;
          }

          function createWelcomeMessage(user, avatarURL) {
              return `
                  <html>
                      <head>
                          <title>Welcome to PokeLoan</title>
                          <style>
                              body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f0f0; }
                              .container { text-align: center; }
                              .details { border: 2px solid lightgreen; border-radius: 10px; padding: 15px; margin: 10px 0; background-color: #f0fff0; text-align: left; }
                              img { width: 100px; border-radius: 50%; }
                          </style>
                      </head>
                      <body>
                          <div class="container">
                              <h1>Welcome to the server!</h1>
                              <p>Your main account is unique, you now have access to the server. You can only use this account within our server.</p>
                              <div class="details">
                                  <p><strong>ID:</strong> ${user.id}</p>
                                  <p><strong>Username:</strong> ${user.username}</p>
                                  <p><strong>Thumbnail:</strong></p>
                                  <img src="${avatarURL}" alt="Profile Picture">
                              </div>
                          </div>
                      </body>
                  </html>
              `;
          }
      });
  });






  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `Server running! Open this URL: ${REDIRECT_URI}`,
    );
  });
});
