<template>
  <div class="home-wrap">
    <div class="navication-menu">
      <div class="banner">
        <h1>Welcome to Pacifik</h1>
        <p>Exclusive Collection of Jewelry</p>
      </div>
      <div class="navbar-tab">
        <div class="pacific-logo">
          PACIFIC<sup> ®</sup>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <v-carousel>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
          transition="fade-transition"></v-carousel-item>
      </v-carousel>
    </div>
    <div class="main-menu">
      <v-main>
        <router-view />
      </v-main>
    </div>
    <div class="footer">
      <div class="main-container">
        <!-- <svg-icon type="mdi" :path="path"></svg-icon> -->
        <div class="body-container">
          <div class="container-1">
            <div style="display:flex;flex-direction:row;width:30%;align-items:center;">
              <div class="circle">
                <img src="../src/assets/icon/phone.jpg" style="width: 30px;">
              </div>
              <div class="phone-text" style="padding-left: 5%;padding-top:2%;">
                <div style="font-weight: 400;color:grey;font-size:18px;">Phone Number</div>
                <div style="color: white;font-size:18px;">+123456789</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:row;width:30%;align-items:center;">
              <div class="circle">
                <img src="../src/assets/icon/gmail.jpg" style="width: 30px;">
              </div>
              <div class="email-text" style="padding-left: 5%;padding-top:2%;">
                <div style="font-weight: 400;text-align:left;color:grey;font-size:18px;">Email</div>
                <div style="color: white;font-size:18px;">Kannan@gmail.com</div>
              </div>
            </div>
            <div style="width:35%;">
              <div class="email-container">
                <v-text-field v-model="email" hide-details variant="outlined" outlined dense dark class="text-field"
                  placeholder="Enter Email Address">
                </v-text-field>
                <!-- <input type="text" :rules="emailRules" v-model="email" class="email" placeholder="Enter Email Address"> -->
                <button @click="submit()" type="submit" class="submit-button" :disabled="!emailRules">Submit</button>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="container-2">
            <div class="container-2-1">
              <div class="name">
                Pacifik
              </div>
              <div class="para">
                <p>
                  Pacific Furniture specializes in crafting high-quality,
                  custom furniture for a variety of clients including
                  individuals, interior designers, and commercial properties.
                </p>
              </div>
            </div>
            <div class="container-2-2">
              <div class="name">
                Company
              </div>
              <div style="margin-top:25px;font-size:18px;">
                <ul class="web">
                  <li @click="aboutUs()">-- About us</li>
                  <a @click="helpUs()" style="text-decoration:none;color:white;">
                    <li>-- Help Center</li>
                  </a>
                </ul>
              </div>
            </div>
            <div class="container-2-3">
              <div class="name">
                Products
              </div>
              <div style="margin-top:25px;font-size:18px;">
                <ul v-for="(item, index) in inspirationCategory" :key="index">
                  <li @click="routeToRoom(inspirationCategory[index].roomId, inspirationCategory[index].name)">-- {{
                  item.name }}</li>
                </ul>
              </div>
            </div>
            <div class="container-2-4">
              <div class="name">
                ImportaProductnt Links
              </div>
              <div style="margin-top:25px;font-size:18px;">
                <ul>
                  <!-- <li @clic="privacyPolicy()">-- Privacy Policy</li> -->
                  <li @click="home()">-- Home</li>
                  <li @click="aboutUs()">-- About us</li>
                  <li @click="helpUs()">-- Help Center</li>
                  <li @click="inspiration()">-- Inspiration</li>
                  <li @click="cart()">-- Cart</li>
                  <li @click="profile()">-- Profile</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="line1"></div>
          <div class="container-3">
            <div class="copyright">
              <span>Copyright © 2024 Pacifik. All rights reserved.</span>
            </div>
            <div class="top">
              <button @click="scrollToTop" style="text-decoration:none;color:#D7D7D7;font-size:18px;"> <span>BACK TO TOP
                </span>
                <span><img src="../src/assets/icon/up.png" style="width: 20px;"></span>
              </button>
            </div>
            <div
              style="display:flex;flex-direction:row;gap:20px;margin-right:3%;justify-content:center;font-size:18px;color:#D7D7D7;">
              <div>Follow Us</div>
              <a href="#"><img width=30 height=30 src="../src/assets/icon/Facebook_Logo_2023.png"></a>
              <a href="#"><img width=30 height=30 src="../src/assets/icon/Instagram_icon.png"></a>
              <a href="#"><img width=30 height=30 src="../src/assets/icon/flipkart-icon.webp"></a>
              <a href="#"><img width=30 height=30 src="../src/assets/icon/145812.png"></a>
            </div>
          </div>
        </div>
        <div class="phone-container">
          <div class="container">
            <div style="font-size:16px;color: white;font-weight:700;font-family: 'Unbounded';font-style: normal;">
              Pacifik</div>
            <div>
              <p style="font-size:12px;font-weight:700;color:#777777;font-family:Open Sans;font-style:normal">
                Pacifik Furniture specializes in crafting high-quality,
                custom furniture for a variety of clients including individuals,
                interior designers, and commercial properties.
              </p>
            </div>
            <div style="font-size:14px;color: white;font-weight:700;font-family: Unbounded;font-style: normal;">
              Subscribe Now</div>
            <div style="font-size:12px;color: #777777;font-weight:400;font-family: Unbounded;">Join Pacifik Community
            </div>
          </div>
          <div class="submit-container-mobile">
            <div style="flex: 1;">
              <v-text-field v-model="email" outlined hide-details class="text-field" dense dark
                placeholder="Enter Email Address" style="width:100%"></v-text-field>
            </div>
            <div>
              <v-btn style="background: #E3CD00;font-family: unbounded ;font-size: 12px;border-radius:0 ;"
                @click="submit()" type="submit">Submit</v-btn>
            </div>
          </div>
          <div style="width:100%;">
            <v-expansion-panels dark>
              <!-- <v-expansion-panel expand-icon="mdi-plus" collapse-icon="mdi-minus" color="white">
                    <v-expansion-panel-header class="white--text"
                        style="font-weight: 400;font-style:Open Sans;height:70px;background-color:black;">
                        <template v-slot:actions>
                            <v-icon>mdi-plus</v-icon>
                        </template>
Need Help
</v-expansion-panel-header>
<v-expansion-panel-content class="white--text" style="background-color:black;overflow-y:auto;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
</v-expansion-panel-content>
</v-expansion-panel> -->
              <v-expansion-panel expand-icon="mdi-plus" collapse-icon="mdi-minus" color="white">
                <v-expansion-panel-header class="white--text"
                  style="font-weight: 400;font-style:Open Sans;background-color:black;">
                  <template v-slot:actions>
                    <v-icon>mdi-plus</v-icon>
                  </template>
                  Rooms
                </v-expansion-panel-header>
                <v-expansion-panel-content class="white--text" style="background-color:black;">
                  <div style="margin-top:25px;font-size:18px;">
                    <div v-for="(item, index) in inspirationCategory" :key="index">
                      <div @click="routeToRoom(inspirationCategory[index].roomId, inspirationCategory[index].name)">--
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel expand-icon="mdi-plus" collapse-icon="mdi-minus" color="white">
                <v-expansion-panel-header class="white--text"
                  style="font-weight: 400;font-style:Open Sans;background-color:black;">
                  <template v-slot:actions>
                    <v-icon>mdi-plus</v-icon>
                  </template>
                  Company
                </v-expansion-panel-header>
                <v-expansion-panel-content class="white--text" style="background-color:black;">
                  <div class="mobile">
                    <div @click="aboutUs()">-- About us</div>
                    <div @click="helpUs()" style="text-decoration:none;color:white;">-- Help Center</div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel expand-icon="mdi-plus" collapse-icon="mdi-minus" color="white">
                <v-expansion-panel-header class="white--text"
                  style="font-weight: 400;font-style:Open Sans;background-color:black;">
                  <template v-slot:actions>
                    <v-icon>mdi-plus</v-icon>
                  </template>
                  Important Links
                </v-expansion-panel-header>
                <v-expansion-panel-content class="white--text" style="background-color:black;">
                  <div class="mobile">
                    <div @click="home()">-- Home</div>
                    <div @click="aboutUs()">-- About us</div>
                    <div @click="helpUs()">-- Help Center</div>
                    <div @click="inspiration()">-- Inspiration</div>
                    <div @click="cart()">-- Cart</div>
                    <div @click="profile()">-- Profile</div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel expand-icon="mdi-plus" collapse-icon="mdi-minus" color="white">
                <v-expansion-panel-header class="white--text"
                  style="font-weight: 400;font-style:Open Sans;background-color:black;">
                  <template v-slot:actions>
                    <v-icon>mdi-plus</v-icon>
                  </template>
                  Follow Us
                </v-expansion-panel-header>
                <v-expansion-panel-content class="white--text" style="background-color:black;">
                  <div
                    style="display:flex;flex-direction:row;gap:20px;justify-content:flex-start;font-size:18px;color:#D7D7D7;">
                    <a href="#"><img width=30 height=30 src="Facebook.svg"></a>
                    <a href="#"><img width=30 height=30 src="Insta.svg"></a>
                    <a href="#"><img width=30 height=30 src="Twitter.svg"></a>
                    <a href="#"><img width=30 height=30 src="Utube.svg"></a>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div
            style="margin-top:20px;margin-bottom:30px;color:#D7D7D7;font-size:12px;font-weight:400;font-family:Unbounded;">
            Copyright © 2023 Pacifik. All rights reserved.</div>
          <div style="padding-bottom:20px;">
            <button @click="scrollToTop()" style="text-decoration:none;color:#D7D7D7;font-size:18px;"> <span>BACK TO
                TOP </span> <span><img src="UpArrow.svg"></span></button>
          </div>
        </div>
      </div>

    </div>


  </div>

</template>

<script>


export default {
  name: 'App',

  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
};
</script>
<style>
.banner {
  /* background: url('link-to-banner-image') no-repeat center center/cover; */
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  text-align: center;
  padding: 10px;
}

nav {
  background-color: #333;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

nav ul li {
  float: left;
}

nav ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 35px; /* Increased font size */
}

nav ul li a:hover {
  background-color: #111;
  color: #FFD700;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

nav {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 1rem;
  gap: 20px;
}

.pacific-logo {
  font-family: ;
  font-size: 80px;
  color:
    /* Choose a color for the text */
  ;
  text-align: center;
  /* Center the text horizontally */
}

.navbar-tab {
  display: flex;
  flex-direction: column;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav .logo {
  color: black;
  font-size: 1.5rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 40px;

}

.navbar-tab {
  display: flex;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: black;
  text-decoration: none;
}

.home-wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.fill-height {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-menu {
  height: 10%;
  background-color: black;
  /* Optional: to visualize the area */
}

.main-menu {
  flex: 1;
  background-color: white;
  /* Optional: to visualize the area */
}

.footer {
  height: 5%;
  /* Assuming footer has a fixed height */
  background-color: lightgray;
  /* Optional: to visualize the area */
}
</style>
<style scoped lang="scss">
$webWidth: 767.01px;
$mobileWidth: 767px;
$primaryFont: 'Unbounded';
$secondaryFont: 'Open Sans';

li:hover {
  cursor: pointer;
}

.main-container {
  @media only screen and (min-width: $webWidth) {
    width: 100%;
    height: auto;
    background-color: black;
    // padding: 3%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: $mobileWidth) {
    width: 100%;
    height: auto;
    background-color: black;
    padding: 3%;
  }
}

.body-container {
  @media only screen and (min-width: $webWidth) {
    width: 100%;
    border: 1px solid #747474;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

.container-1 {
  @media only screen and (min-width: $webWidth) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 3%;
    flex: 1;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

.container-2 {
  @media only screen and (min-width: $webWidth) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5%;
    flex: 1;
    width: 100%;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}


.text-field {
  @media only screen and (min-width: $webWidth) {
    width: 100%;
    border-radius: 0px;
    box-sizing: border-box;
  }

  @media only screen and (max-width: $mobileWidth) {
    width: 100%;
    border-radius: 0px;
    box-sizing: border-box;
  }
}

.text-field :deep(input::placeholder) {
  font-family: 'unbounded';
  font-weight: 400;
  font-size: 12px;
}

.submit-container-mobile {
  margin: 20px 0;
  display: flex;
  border: 1px solid white;
  padding: 8px;

}

.submit-container-mobile .text-field {
  flex: 1;
}

.submit-container-mobile .text-field :deep(fieldset) {
  border: none !important;
}


.line {
  @media only screen and (min-width: $webWidth) {
    border: 1px solid grey;
    width: 100%;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

.line1 {
  @media only screen and (min-width: $webWidth) {
    border: 1px solid grey;
    width: 100%;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

.container-2-1 {
  @media only screen and (min-width: $webWidth) {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 25%;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

.container-2-2 {
  @media only screen and (min-width: $webWidth) {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 20%;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

.container-2-3 {
  @media only screen and (min-width: $webWidth) {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 20%;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

.container-2-4 {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 35%;

  @media only screen and (max-width: $mobileWidth) {
    margin-top: 8%;
  }
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: $webWidth) {
    width: 120%;
    margin-bottom: 3%;
  }

  @media only screen and (max-width: $mobileWidth) {
    width: 50%;
    margin-bottom: 5%;
    margin-top: 3%;
    gap: 15px;
  }
}

.name {
  line-height: 24px;
  font-family: 'Unbounded';

  @media only screen and (min-width: $webWidth) {
    font-size: 32px;
    color: white;
  }

  @media only screen and (max-width: $mobileWidth) {
    font-size: 15px;
    color: #E3E3E3;
  }
}

.para {
  font-family: "open sans";

  @media only screen and (min-width: $webWidth) {
    color: #777777;
    font-size: 15px;
    line-height: 24px;
    margin-top: 10%;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

ul {
  @media only screen and (min-width: $webWidth) {
    list-style-type: none;
    color: #E3E3E3;
    line-height: 40px;
  }
}

.container-3 {
  @media only screen and (min-width: $webWidth) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #D7D7D7;
    padding: 2%;
    flex: 1;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: none;
  }
}

.copyright {
  font-weight: 400;

  @media only screen and (min-width: $webWidth) {
    font-size: 18px;
    color: #D7D7D7;
    margin-left: 2%;
  }

  @media only screen and (max-width: $mobileWidth) {
    font-size: 13px;
    color: white;
    line-height: 19px;
  }
}

.top {
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  scroll-behavior: smooth;

  @media only screen and (min-width: $webWidth) {
    font-size: 15px;
    margin-right: 4%;
    width: 15%;
  }

  @media only screen and (max-width: $mobileWidth) {
    font-size: 13px;
    margin-top: 10%;
    width: 50%;
    float: right;
    color: white;
  }
}

.phone-container {
  @media only screen and (min-width: $webWidth) {
    display: none;
  }

  @media only screen and (max-width: $mobileWidth) {
    display: flex;
    flex-direction: column;
    border: 1px solid #747474;
    margin: 5% 3%;
    height: auto;
    padding: 10px;
  }
}

.phone-icon img {
  @media only screen and (min-width: $webWidth) {
    margin-top: 30%;
    border-radius: 50px;
    width: 80% !important;
    object-fit: contain !important;
  }
}

.email-icon img {
  @media only screen and (min-width: $webWidth) {
    margin-top: 30%;
    width: 80%;
    border-radius: 50px;
  }
}

.container {
  @media only screen and (max-width: $mobileWidth) {
    /**border: 1px solid white;**/
    text-align: left;
    width: 90%;
  }

  @media only screen and (min-width: $webWidth) {
    display: none;

  }
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
}

.expansion-line {
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.v-expansion-panel:not(:first-child)::after {
  border: 1px solid;
}

.email {
  height: 100%;
  width: 100%;
  color: white;
}

.email:focus {
  outline: none;
}

.email-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: .5em 1em;
}

.submit-button {
  text-transform: capitalize;
  border-radius: 0px;
  min-width: 25% !important;
  max-width: 25% !important;
  background-color: #E3CD00;
  padding: .5em;
  font-family: 'unbounded';
}

.submit-button:disabled {
  cursor: not-allowed;
}

.web {
  @media (max-width: 768px) {
    display: none;
  }
}

.mobile {
  @media (min-width: 768px) {
    display: none;
  }
}
</style>