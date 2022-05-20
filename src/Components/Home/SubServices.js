import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
const SubServices = () => {
  return (
    <>
    <div style={{marginLeft:"15%",marginRight:"15%"}}>
    <h2>Our Services are currently available in Lahore and Islamabad Only.</h2>
    <h5>Sorry for this Inconvenience</h5>
    </div>
    <br/>
    <br/>
    <br/>
    <h2 style={{color:"green",textAlign:"center"}}>Plumers in Islamabad</h2>
    <br/>
    

    <div className='Plumber01' style={{display:"flex"}}>
    

<div class="card">
  <img src="https://www.thehandyman.com.pk/images/plumber1.png" alt="Avatar" style={{width:"15%"}}/>
  <div class="containner">
    <h4><b>Umer Farooq</b></h4> 
    <p>Location: G15, Islamabad</p>
    <p>Contact No: +92-355-572-5296</p> 
  </div>
</div>
<div class="card">
  <img src="https://4.bp.blogspot.com/-N4qAedvdDSI/XA6tJvsy8HI/AAAAAAAAAGo/YIJ5pvyEGdI4N_sy_HIcYfeaglTtX6hVACLcBGAs/s1600/48038520_2408518366042686_2525146418759335936_n.jpg" alt="Avatar" style={{width:"15%"}}/>
  <div class="containner">
    <h4><b> Abubakar Zorrain</b></h4> 
    <p>Location: E9, Islamabad </p>
    <p>Contact No:+92-345-551-9737
</p> 
  </div>
</div>
<div class="card">
  <img src="https://cementationcomforts.com/images/pages/2021/03/682-plumber-rehan-plumber.jpg" alt="Avatar" style={{width:"15%"}}/>
  <div class="containner">
    <h4><b>Danial Akbar</b></h4> 
    <p>Location: F10 Markaz</p>
    <p>Contact No: +92-355-563-0997
</p>  
  </div>
</div>
<div class="card">
  <img src="http://www.awammi.org/images/workshop-view4.jpg" alt="Avatar" style={{width:"15%"}}/>
  <div class="containner">
    <h4><b>عديل نواز</b></h4> 
    <p>Location: PWD Markaz</p>
    <p>Contact No: +92-305-558-5010
</p> 
  </div>
</div>


    </div>

    <div className='Plumber02' style={{display:"flex"}}>
    

<div class="card">
  <img src="https://content.jdmagicbox.com/comp/chittoor/s7/9999p8572.8572.180424164029.h7s7/catalogue/mohanbabu-tt-electrical-and-plumbing-contractor-penumur-chittoor-electricians-0ss0ybabw3.jpg?clr=" alt="Avatar" style={{width:"15%"}}/>
  <div class="containner">
    <h4><b>Haseeb</b></h4> 
    <p>Location:G9 Markaz</p>
    <p>Contact No:+92-345-558-3885
</p> 
  </div>
</div>
{/* <div class="card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQun-sBXklPCBv7IQYhvP15D9zaNFJ49L9Lunx1hrMPb0j--Bt2HTs67sowABxzHqwMngA&usqp=CAU" alt="Avatar" style={{width:"15%"}}/>
  <div class="containner">
    <h4><b>John Doe</b></h4> 
    <p>Architect and Engineer</p> 
  </div>
</div> */}
<div class="card">
  <img src="https://content.jdmagicbox.com/comp/dumka/g3/9999p6434.6434.190823081933.s2g3/catalogue/maan-electrical-and-plumbing-works-jarmundi-dumka-electrical-engineering-contractors-wvoba6lp97.jpg?clr=" alt="Avatar" style={{width:"15%"}}/>
  <div class="containner">
    <h4><b>Malik Sohail</b></h4> 
    <p>Location: F9 Markaz</p>
    <p>Contact No:+92-355-547-9192
</p>  
  </div>
</div>
<div class="card">
  <img src="https://content.jdmagicbox.com/comp/chittoor/s7/9999p8572.8572.180424164029.h7s7/catalogue/mohanbabu-tt-electrical-and-plumbing-contractor-penumur-chittoor-electricians-0ss0ybabw3.jpg?clr=" alt="Avatar" style={{width:"15%"}}/>
  <div class="containner">
    <h4><b>Afaq Cheema</b></h4> 
    <p>Location: D12 near PSO Pump</p>
    <p>Contact No: +92-355-513-3354
</p> 
  </div>
</div>


    </div>
    


    <div className='Electrician'>
      <br/>
<h2 style={{color:"green",textAlign:"center"}}>Electricians in Islamabad</h2>
<br/>
<div className='Plumber02' style={{display:"flex"}}>
<br/>

    <div class="card">
      <img src="http://maidinpakistan.com.pk/img/services/oneday/electrician.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Hamza Kayani</b></h4> 
        <p>Location: f9 </p>
    <p>Contact No: +92-345-555-4498
</p>  
      </div>
    </div>
    <div class="card">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVFRUYGBgYHBgYGBgYGBgYEhgYGBgZGRgZGRgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCQ0NDQ0NDY0NDQxNjQ0NDQ0NDQ0NDQ0NDQ0NjY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAH0BkgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABCEAACAQIEAwUFBQUGBgMAAAABAgADEQQSITEFQVEGImFxgRMykbHBQnKh0fAHI1Ji4RSCkrLC8SRDY3OTohUzU//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAlEQEBAAICAgEEAgMAAAAAAAAAAQIRAzESIQQTQVGhIoEFIzL/2gAMAwEAAhEDEQA/AOKaAZI5kJeZK24mMBmtCLSAr1i0dpFydognXWEBHvGNBIgNDMBoQqjaEwgtDaUQcgjWI8YcKLY0AVAYJEd1kSvbeOC1JaKT4fCVH91GbxA0+O06TgnZtTdq6hhpZVci3mV3+PKRny44zdrrx8GfJdSf39nKT079l/EaaUHQo+YPndgoK95QFA1vsp5TAxnY0liaVRQpPdRgxsOma5v8J1H7PeHNhhWWsUBdkKEG6kAMDqQLbxYc3HlfVHL8fkxnuNrHYlXDG6m2q2NnFzzXloZ57j3/AH7ffPznonGkpqybDNe3Qmed4tb1m++f800Rje2YTRFH8q/ISj2gou9FkRSzEroPBgTNCiO6PIQmESXCjhtYb02+F/lJUwzrujDzUzsmECXMi04Piouqi3MzreCC2Hp/cEulBzEVraCTbs5NOXxSj2j/AHm+cs4JR0mu+Epm5KLc+AvBGEQbLb4yvIri5/iAFjoJJTpL7KmbC+ZNbC/vCatbhtNtwfQmN/YVCqoJspW3Xum4itEi6xnO9qKqlfZg94gd37zKB+M6C05jjy/8Rc7IlN2290VVzHXwufSJUurty3AaWeriijEP7Rw2Ua5czFO8dLE5xprNrCKaasrOdGOrEFspJIufgPScthsdUoVnyMqh6iq91BZszn3SToQCTz3E2sX7PNndvA5mFtr3PPewnROWOl7tDWp1MCURwXGoF+9pe/4TL4R2m9qMgpWygkHNYWuF187C2nWVeN49DTKUSDpdmtZQALsNd9bCYNLiwREWkArWGe6g693X4x9wpvencf2uswFsqA+rflIiCfed2+1YHTpcATnBxLFGyqgJtmuF1J0XmbDQiQVWxb++wQAC+d7LryA2PjbrEfi9j7Me4n3Js1j3jMHsepFKje1/Zpe23ujablY94xY9Fl2SmSAyJTDBlpSAwgZGDDBgBAxwYAMe8AOK8G8V4Ad414N4rwAooN4oB8zOZA7coVR5ComRuIPyPofoYZgOt4yPyMKUSRRrxXiMxgNDMBxHCoQNR5wmMZNCDvGlWFKKKNeK8nR7EFJIAFydABuZ0PDeBooDVQHbcL9gefWRcCwoA9o2593y/rNtTeZObms/ji9X4nxMbPPOb/EJ25DQdBoJuYNe6P14fSYyJcidBh10EwZ3cejlJjEyJJMl4wj4aurC6m9tDyIPQg6g+c5++2bKoKumh1A1APLxE5TEUCtex5tcdCCZ11V1YAjY6jx56TMxdAMyH7SsvnlJAP4kTd8Tnyxy8Mur+mT5fBjnx3OT3Hpq7R4IMK89R4gWg2hGNAAIjQjAJgCMYiPEYABgkQyJG0AU5/itPNVf/tW9GOU/Ob8weJPapUP/AE1/zAxwPM8VR/epn7yEg5hoVKEK9+oOUHrrKFRER3VxURrg5zZqZubr3Bqq+IJ8ZNj+Is7ElBkVQ4AYggaBS1uZsDaQvxN3U50Ui+mt8pOuga9hvpoJXs7Z0tYV0Q5ahGV/dI7y765rddDLHEEoCmqo1MANmYhhcCx2Uakn6TOpszJlysTbVcliByZSN5q4fD5qLDJYkImYrZt++3nbWParN3cT0OHO+e7sitZggtYZgQqnmNFW4lXheApsj5hZqebNmY2v3rG3TSNiXfMn74qFXI4UNoyaAkgi/peYGOBRGYu7E3BGw1FupvzMNbR5aj37soD7Olff2aX/AMCzWqnvHzmZ2bFkQdKaD/1WaNQ6nzhj0nLsSmODABhiWkYMIGRgwgYwkvHvAvEDADvFeDePeAPeK8a8V4A94o14oB8v3ufKOIKCOZjrbBEyJ0+MkigYEe/nCAg5LnTeG2kKCJkLvDOsiZY4VCrE/rpEz2hou58DIjK0jdErwgZCVhI8WjldjQFgAOQ0l6lKFA6DymjhxPK5H1HF1NLVJJsUTM6mtpfom/68TM+XtXJ7i0plLEYNsxdOYN1113vz2PTTU3lxIYkzK430yZSVnUsLUZAXJUgMB/FlJG+gBOhtppeKlRVGDDl6C172sPGaTbSo9Mk6CH1crfXo8ZNarrUaqWZ1KsjBciHTe12La8uVppXmTwPFAoqHRlFvMeE1J73HnMsZY+d5cLhnZfsz+N8TGHp+0KF9QtgQDqDrr5SHgfGlxKuyoUyEDUg3uL8pS7a64b++Pk0pdgfcq/eT/KZbk60xjFeMTAMhu0eHBKkvcEg9wnUG3KEvH8OftN6o/wCU5h6S53NvtN/mMmFNekcxLbozx3Df/oB5hh9JJT4nRcgK4JbQb6+Wk5KrRBsABNOlSVTSIA95Nee0NHK6F3AFzMXFUc9eot/+WPx0+s2pj1KoXEVGN7BF28xCCvL8Jge/apquenmuBYomdSLcwLJ8Z1NFsGnuKg+6hH2db2XXrJEo0z37EksxFsoXcj/VJVpU11CXtfdv4Rl6eNpe0tWinukXsRmHkVt+hLuNCrTOZVaw2YC1xtvKfCsOVqEksVZEKAm6rbcD0y/jC7Q1bJbqfkJ0xia8+4tVoI5GTv6swuTqbk2vpaY3arKKYyqq3OuXc2XW585qdpe/UJZcrCmoAzK25N789ukx+1dQsqLlI1a1/QS8cf42/gX7PfOArYDwQD8BLjHU+cr8HGp8hJWOpnDDpWXYwYQMjBhAy0pQY4MjBhAxgd494AMe8AO8V4F494Ad4rwLxXgB3igRQD5jvFeNeK8yNo4xjXjWuQOsQqVNBfmflAOsTNEohRIZpE5kryBo4Kkp+63gP9SiQGSqe63p8/6SKVUFBeFIcQ/KPGbpW6jco9oFA1Q+hH1lyl2mpj7DfFZyYMnw1MswA5mTl8Xivuz9u2H+Q+RPUv6dzge0lJmCuGp32Y95fW206jDnughlYEaEagjwtMDsxwSmqCo4GZiwW4BIABuddttfSR3qK5ZHyE6lQAUJ31Xb1FiZi5vi43/j09Dh+Znr/b7dTmPWGHnKJ2qCnJXQo3VdVNudjt8TNKnx3DsLiof8L/lMeXx+THuNePNx5z1Y2w8NWnOV+0VJR3AznxGRfi9r+gMx6/FsViWCUgDmKroStFSxAGZvebX7o8DK4/i55fbTly8/HhO9u1/+RQNlTM7j7NMF2U/zFdE9SJaPa5qJVMRh6q5vda9PObb9wP3j4Lc+E1+GYHJTRFVVsADkGVL21IEkx3DKdVClRVdTyI59QdwfETfxcH0+q8vl+TjyXVnr9grJQxlFSrZkbvBkNjpcEG40I1BEPhXC6eHDBC1mIJzG+3pD4XgadGmKaLlUEnU3JJNySeZMuCaZvTHlrfo8Fo0KMma3CaNycmpNz3m3+MY8Lp9D8TNEwCI90MxuE0r373xkhwi93U90gj06y4yxiIAlmLiT+9r/AHEHxIm0sy6mGJqVSdnRbf3dNfURwq8xwXGsR7RqRK5UzKtlOfMCbAkk30U8pvU8RUYXLmxvyW52206TmcMM2IrEe8HDqPABgfMWcR8GtFmzHDGxDHvO7Jta6BDa2/4SstQY43L1HaUcbVzC1Q91SNkAsNBy58pa7QV+4CWX3STt0/rOBxOEwxAZEKkEgrcsp8QTqPIyph8KXdaYKoHI2sCQveOu52GnOGOQuKlXrlid9eZuW8t5DiTmZBrcuAbnqw2ixftFd0GuUkDTvNrbbpvBw92q0xqe/StpbUsuYabgStpfR/B929PnJCdZFwb7XpDMWHR3sQMIGADHBlJSAwgZHeODGEt494AMV4Ad4rwbx7wB7xXjXivAHvFGvFAPmXLFaLOOsWcdZlbDQ03v4H5Qc46x1eIyaFBO8KSYHMhaStIWlQqcbH0+skweDqVWyU0LnoLaeZOgkQnfdgsAxpF1UnOxN7aWXugX9D8ZTnXNVeyuOUX9gzD+VkY/ANf8Ji1sDUubqVI0KsCGHoZ79h8M43X4axsdwilWFqiX6EizDybcRy6F1fVfPPsWva3hN/gHD3zgkba6/r9XnY8Y7HNTYunfTy76+fUeIlaimUC0WWd1pWHFJd7XMMzZMo3UsLcu8Qw+NiJVZMtY6sdFvcWANzfTbW426SdHKtnHSzDkw/OUcZxABs/LXpe58pyn4jRbJPbJ7QhXroB5H53+E0sNhEy+6NddtZkohdy595hp0GvP0mph64VNdByv06n4iXnvxkcsLPK1FXwqA3yjwm7wfuIh3ysHt1sQxH4TJqg2uZbweOp90Kza6EEd2/nyk426dLJt6yrAgEbGxHkY4lDggIoICTcDnva5t+Fpap10YkKwJG4B2nWMVmqljXiMgxGIRBdjYbQJIWiDRr3HnGvGBGATETAMActBZoLsALnQTIxXHqS3CXdui7X8W5QtkElvTWzW8pkNxGn7RzckZQoI1UnUnL8ZhYnH1qx7xsvJVNl9R9r1j0aV/eN/AflOGXNrp3x4fy5xOA1BiPahksctxmOa1rOLWttJ8BRXDACswsCbHYAHUAXnRhF2AyyvWoIe6e+G0IYaSMs7nNV34sZx3yjj+JVQbuoIpr9ogi+ulhI8C1JmTM2Vw6shWzE72TW2Xx6zQ43Up0wUNwDcWOhsRsJBSo5KdR8o5ug81BFreN524crZq+tdOXyscZlMsbvfuz8VWxNWkTWtUXPUKgZgyFMpGl7W5W3k/BKC+0o3ZSyudFIc2a1vduFA31tAxVBADfu3AFspzBvDTW58ZPwxAKtAqGXKyIwIFyGbRrg26zvXCPZuE7MfERwYPCfcJ/W0V48enPLsYhCAIQMtIgY4jAxXgBgx7wLxXgB3jiBePADig3j3jB4o14oB8z5BGyiSRpkbdAyiMg1kkjU6mBUfOOYI3hGIwNDweDqVnCU0LseQ5DqTsB4mW+E8LqYh8i6KNXc+6o+p6Cei8J4bTorkQWXd2PvuRzY/SVjE5VndnexdFLPiSrsNcv8Aygelvt+unhO0TEqAFQWA0FhbT6CZyVLg+HL5CFSaUhq06hOl/QSYShQO/gL+pIA+slo1Nr3sb2PLcxHpcUTMxXAKLkkZkJ/hIy3+7LjXBkiOYrNiWzp592p4Pi6CF0XOg950vmUfzJuB4i84JMTc3Jv5z6FScrxT9nmDr1GqBqlItqy08gQsd2symxPhpzjx1BlcsnmdGoQO6fM6/jNLC4mmd7Hbxvbw5To+J/szCr/w+IYsPs1VUhvDOoGX4GcHVzU3am4KujFGW4zAg2O2luhhcZSmVjYx1Z6pFOmbX95tNBt+vKb/AGU7PZEN2F89ydb3GwXyt8Zw2IrWsEbQLc2/iN9zz0tN7s3UfI3fb3tO8dNB+cUmpo7d+3p9ZrqFzMAOYYgnxlFsKn8bj++w+s86x+KqB2AqOB0ztb5yJMTUI1dz5sTHufhF29IZOlSp/wCR/wA5DUw+bQvUI8XY/WcDTrVNgzfEy7Rao3Nz6sY9z8E7NaP/AFKlv+4/5wloa++9+f7x7/OcslKp/N8ZMlCoDcGx631h/ROlNI/xv/jf85FWQAZmd7Lrcu+n4zAqvUQXerbwuSfQSumd/fZivJTf4mTllMZ7i8cbl0lrYipWc2Zwg2BdiW8TmMdEINtgOX+0sUqJA00gvTJ5X6+Mz5ZeVaMcJjD0XBNgPKayO1r2FvKc8cSKbXIufsryHnLNHig5nflyEnxq9xrmp4A+krV62migG4tKD8VVTvcaaeZkWPru6gowU35i++nxjmNHlFitUSqASMrqcuoB1JsQOoPSSN2bqA5RWXJsUNPu26KSxyjyi4FSDu9R9craAbA23nSK4M0Y+mbkstcxjuzzOO9k13ys4B6GzA3PwlLBcLr03RbAoroxYtqANrDnOweoNRY262My62J76KACCe8SbMtiLd06m+svbm7XhX/1n1+UV4sBpSPr8oAadZ053tKDCBkYMIGUSS8eADHvADvHvAvFeAEDCvAj3jArxXjXivACvFBvFAPmy8V5HmiDTJps2OAu5hXgJzgEgk+Ewr1HVEF2Y2HQdSfAbyBZ2nZHAZENYjvPovggOp9T8hCC3UbfDcDTooETYasebNzYy+mgPjI0EkAlOZyLWktMyFt5Iu0Z6WadTuOfFR85Jw6oHDI3LVeovvKiN3G8W+kgwVXK9/SI9OgpsbZW5Q1Eid+cfDPeILSNaSq0h0kdSppaANSqB3Nhe23S85LFfs9p1sU+IrVjlbKfZoLMxCKpJc7A25C/jOvwyZBYbmWkQDU7wls6KyXtkjslw7IFGEogDS+QZz5v7xPiTK6dlMIgIpoUBN7BmI+DE9J0LPePa8Cef4/sW7OWRkN9bNmU/WVV7KYldkQ+TL9bT0d1lZql2yiPY8Y88xXDatG2dMua+XVSDa19ieoioid3xThaV3XOzZU0CrYAk2uTIk7M4f8An/xf0lTKJuLkHqBRcmwEqHFu5sikD+IjX0Wdjxns3S9mGRdUN973BsDe/Tf4zJoYHXur5nS/obTnnyWeovHjl91mUOHXNyCzdSbn+kuU8OV1ItblNZkCDTyPiZUrKSCSbdeun1mfK23274yTpWe2W/8AtK5bLe1tdfwlyvS0y7CZXGcVkuq7+6vW8WM3RldMg0mrPlBsAdSbkXmtT4JcW9ofRf6yxwPBBE11NySfE7zTooL36TdjhNMeWdtcdX4cVZgxsdRqma/Qg8pdwGDZrIAxQbnbQbX8Z07IrbqCPEAyZEAFgPSH05td5ctKGGpqgsBbwA0kwreMtGhBNHwleER5UNPEEbNJmOYDb5yEUB0jrStsYvpl5OowYtS+MhUynw7FOFKHUW0N9R4SyplpqwDHBkQMMGMkgMe8jvHvAJAYrwLx7wA7x7wLxXjCS8V4F4rwA7xQbxQD5nzx1MjCCGJnsjRNpLxkMYR1kqlWMJRLuqDdmC/E2nptFAgVV0CgKPICwnC9laYbEAn7IZh57fWd0DrCC9raQ5DTkwjATvJeUjMk5QBm0T1kKKDmHO4IPpJq/uDzlemdT5D5wNo4TFZlsdxoZNh61jMhHIa45y5eBNb+0Aw0YbzJVzNPDC+sQW6ZtqYkqX3kOI5SIVDANAPJEaU0bSKhUOa0aVus4AJMo5iiZ+ZNzfp0hY83KryJuY1bWm38uo9IjkT8Pe7VB0fMD1V++v4G3pLZmJwauczLyygjwsTp+JmyrXgdns+YMCDz0I8Jh/2cJdBfQnXS/Sa2IXS40MzsWxve+4uflOefSsVNqYHOVao1ltuZmbVrHXwnGuiPG1lQXYjSc9hqTVXztz90fwg8z4x8TWNSoQ2w1t1mtw6mLZuc0ceGnDky+yeiLDKOX5Qk2t1MFOfnHozQ4rKGWaC85USX02lEK8cRhHjBwoi9kI6wxGQ6SASdTIVkimIkymSAyEGGDAJbx7yMQoAV4rwY4MAIGPeBCvGBXivBvFACvFBvHgH/2Q==" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Hammad Ali</b></h4> 
        <p>Location: G10 Markaz</p>
    <p>Contact No:+92-315-550-5732
</p>  
      </div>
    </div>
    <div class="card">
      <img src="https://images.jdmagicbox.com/comp/delhi/q7/011pxx11.xx11.181031151008.a9q7/catalogue/delhi-62kz7xpks4.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Jawad Zain</b></h4> 
        <p>Location:f10 markaz</p>
    <p>Contact No: +92-305-550-8379
</p> 
      </div>
    </div>
    <div class="card">
      <img src="https://www.giz.de/static/akademie_en/images/images_content_460x160/giz2018-aiz-pakistan-full-width_rdax_782x481s.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Awais Rajpoot</b></h4> 
        <p>Location: E11/2 markaz</p>
    <p>Contact No: +92-315-557-4331
</p>  
      </div>
    </div>
    
    
        </div>
    </div>  


    <div className='Car Mechanic '>
    <br/>
<h2 style={{color:"green",textAlign:"center"}}>Car Mechanic in Islamabad</h2>
<br/>
<div className='Plumber02' style={{display:"flex"}}>
<br/>


    <div class="card">
      <img src="https://image.shutterstock.com/image-photo/close-portrait-bearded-happy-car-260nw-2047185428.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Shoaib Kiani</b></h4> 
        <p>Location: Northern Strip</p>
    <p>Contact No: +92-305-558-8966
</p> 
      </div>
    </div>
    <div class="card">
      <img src="https://lh3.googleusercontent.com/p/AF1QipNS6oaKiedAmNwCu0V1mDdfyIfK-adLg8OLCBCR=s1280-p-no-v1" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Zaeem Arain</b></h4> 
        <p>Location: Rawalpindi Cricket Stadium</p>
    <p>Contact No:+92-355-594-6667
</p>  
      </div>
    </div>
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTiJ6yl4OGiOIvhvDGQukEvUwKZr2J0HLnQ&usqp=CAU" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Ahmad Ayub</b></h4> 
        <p>Location: Near 6th Road</p>
    <p>Contact No:+92-355-557-5047
</p>  
      </div>
    </div>
    <div class="card">
      <img src="https://image.shutterstock.com/image-photo/portrait-happy-car-mechanic-moustache-260nw-2047208114.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Umair Hafeez</b></h4> 
        <p>Location: Stelite Town </p>
    <p>Contact No:+92-325-552-7869
</p> 
      </div>
    </div>
    
    
        </div>              ` `
        
<div className='Plumber02' style={{display:"flex"}}>



    <div class="card">
      <img src="https://propakistani.pk/wp-content/uploads/2020/03/1-15.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Samiullah Shokat</b></h4> 
        <p>Location: Saddar</p>
    <p>Contact No: +92-315-553-2882</p> 
      </div>
    </div>
    <div class="card">
      <img src="data:image/jpeg;base64,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" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Mubashar Saleem</b></h4> 
        <p>Location: G11 Markaz</p>
    <p>Contact No: +92-305-558-3066</p> 
      </div>
    </div>
    <div class="card">
      <img src="https://hondamargalla.com/images/gallery-01.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Sikander Zubair</b></h4> 
        <p>Location: 12 Koh</p>
    <p>Contact No: +92-335-551-0190</p> 
      </div>
    </div>
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvjWZFcBaLv4QmGLbetTxnkxPweMwpFAYZw&usqp=CAU" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>مصور ندیم قریشی</b></h4> 
        <p>Location: Faizabad</p>
    <p>Contact No: +92-315-559-8034</p> 
      </div>
    </div>
    
    
        </div>
    </div>


    <div className='Butcher'>
    <br/>
<h2 style={{color:"green",textAlign:"center"}}>Butcher in Islamabad</h2>
<br/>
<div className='Plumber02' style={{display:"flex"}}>
<br/>

    <div class="card">
      <img src="https://media.gettyimages.com/photos/pakistani-butcher-waits-for-customers-at-a-market-in-karachi-on-june-picture-id536302444?s=2048x2048" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Danyal Azeem Chaudhry</b></h4> 
        <p>Location: Royal Appartments Basement E11</p>
    <p>Contact No: +92-345-558-3842</p>  
      </div>
    </div>
    <div class="card">
      <img src="https://bewilderedinmorocco.com/wp-content/uploads/2014/10/DSC_0053logo.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Malik Umer</b></h4> 
        <p>Location: Saidpur Village</p>
    <p>Contact No:+92-305-557-3770</p> 
      </div>
    </div>
    <div class="card">
      <img src="https://media.gettyimages.com/photos/pakistani-butcher-waits-for-customers-at-a-market-in-karachi-on-june-picture-id536302444?s=2048x2048" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>نعمان عزیز خان</b></h4> 
        <p>Location: F10 Markaz</p>
    <p>Contact No: +92-345-551-9737</p> 
      </div>
    </div>
    <div class="card">
      <img src="https://mokumsurfclub.com/wp-content/uploads/2017/04/food-market-butcher-essaouira-morocco-300x199.jpg" alt="Avatar" style={{width:"15%"}}/>
      <div class="containner">
        <h4><b>Shahzaib Shahid</b></h4> 
        <p>Location: i8 Markaz near Masjid</p>
    <p>Contact No: +92-305-558-5010</p>  
      </div>
    </div>
    
    
        </div>
    </div>


    
    </>
  )
}

export default SubServices