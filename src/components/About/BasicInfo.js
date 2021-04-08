import React from "react";

import image from "../../img/img.png";

const BasicInfo = () => {
  return (
    <div class='profile-content'>
      <div class='tab-content p-0'>
        <div class='tab-pane fade in active show' id='profile-about'>
          <div class='table-responsive'>
            <table class='table table-profile'>
              <thead>
                <tr className='align-middle'>
                  <th className='align-middle'>
                    <img
                      src={image}
                      className='rounded mx-auto d-block img-size'
                      alt='myimage'
                    />
                  </th>
                  <th>
                    <h4>
                      Aldin Emšo <br></br>
                      <small>
                        BSc. ing. of Computer information technology (CIT)
                      </small>
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class='field'>Job</td>
                  <td>Full stack developer at Ministry of Programming</td>
                </tr>
                <tr>
                  <td class='field'>Location</td>
                  <td>Sarajevo, Bosnia and Herzegovina</td>
                </tr>
                <tr>
                  <td class='field'>Birthdate</td>
                  <td>01.02.1998.</td>
                </tr>
                <tr>
                  <td class='field'>Language</td>
                  <td>English, Bosnian</td>
                </tr>
                <tr>
                  <td class='field'>Education</td>
                  <td>
                    Srednjoškolski Centar Vogošća<br></br>
                    <small>2012.-2016.</small>
                    <br></br>
                    Faculty of Traffic and Communications<br></br>
                    <small>2016.-2020.</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
