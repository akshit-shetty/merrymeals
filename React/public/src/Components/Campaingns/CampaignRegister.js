import React, { Component } from 'react'

class CampaignRegister extends Component {
  render() {
    return (
      <div>
        <div>
          <nav>
            <a href="home.html">
              <img src="./images/logo.png" class="logo" />
            </a>
            <label for="btn" class="icon">
              <span class="fa fa-bars"></span>
            </label>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/campaigns">Campaigns</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="/contactus">Contact</a></li>
              <li>

                <a href="#">Register/login</a>

                <ul >
                  <li><a href="/mregister">Member</a></li>
                  <li><a href="cregister">Caregiver</a></li>
                  <li><a href="pregister">Partner</a></li>
                  <li><a href="rregister">Rider</a></li>
                  <li><a href="#">Admin</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="eventregform">
          <div class="col-12">
            <div class="title text-center ">
              <h1>Campaign Registration</h1>
              <center>
                <div class="border"></div>
              </center>

              <p>
               <span> Merry Meals</span> believes that unless members of the civil society are
                 involved proactively in the process of development, sustainable change
                  will not happen. We encourage and invite individuals for <span1>volunteer
                  opportunities</span1>  and <span1>volunteer registration,</span1> to be an active part of
                   our organization and share the same vision and purpose as us – to
                    work for the welfare of children and their families. Volunteers are
                     the backbone of every organization – they not only carry the organization’s
                      ideals within them, but also spread the message far and beyond, sensitizing 
                      the society towards the cause.<span1>Volunteer for NGO,</span1>  volunteer to serve, spread 
                      some smiles!</p>
            </div>
          </div>

          <div class="wrap">
            <h2>Campaign Form</h2>
            <form action="" method="post">


              <div class="input_group">
                <div class="input_box">
                  <img src='https://img.icons8.com/ios-glyphs/344/user--v1.png' />
                  <input type="text" placeholder="First Name" required class="name" />

                </div>

                <div class="input_box">
                  <img src='https://img.icons8.com/ios-glyphs/344/user--v1.png' />
                  <input type="text" placeholder="Last Name" required class="name" />
                  <i class="fa fa-user icon"></i>
                </div>
              </div>

              <div class="input_group">
                <div class="input_box">
                  <img src='https://img.icons8.com/ios-glyphs/344/new-post.png' />
                  <input type="email" placeholder="Email Address" required class="name" />
                  <i class="fa fa-envelope icon"></i>
                </div>
              </div>
              <div class="input_group">
                <div class="input_box">
                  <img src='https://img.icons8.com/ios-filled/344/phone.png' />
                  <input type="text" placeholder="Mobile Number" required class="name" />
                  <i class="fa fa-institution icon"></i>
                </div>
              </div>
              <div class="input_group">
                <div class="input_box">
                  <img src='https://img.icons8.com/ios/344/elections.png' />
                  <input type="number" placeholder="Campaign Name" required class="name" />
                  <i class="fa fa-money icon" aria-hidden="true"></i>
                </div>
              </div>
              <br />
              <div class="campreg"><a href='' > Submit </a></div>


            </form>

          </div>
        </div>
      </div>
    )
  }
}
export default CampaignRegister