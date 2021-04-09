import React from "react";

import image from "../../img/img.png";

const BasicInfo = () => {
  return (
    <div className='profile-content'>
      <div className='tab-content p-0'>
        <div className='tab-pane fade in active show' id='profile-about'>
          <div className='table-responsive'>
            <table className='table table-profile'>
              <thead>
                <tr>
                  <th>
                    <img
                      src={image}
                      className='rounded mx-auto d-block img-size'
                      alt='myimage'
                    />
                  </th>
                  <th className='align-middle'>
                    <h4 className='align-middle'>
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
                  <td className='field'>Job</td>
                  <td>Full stack developer at Ministry of Programming</td>
                </tr>
                <tr>
                  <td className='field'>Location</td>
                  <td>Sarajevo, Bosnia and Herzegovina</td>
                </tr>
                <tr>
                  <td className='field align-middle'>Birthdate</td>
                  <td>01.02.1998.</td>
                </tr>
                <tr>
                  <td className='field'>Languages</td>
                  <td>English, Bosnian</td>
                </tr>
                <tr>
                  <td className='field align-middle'>Education</td>
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
