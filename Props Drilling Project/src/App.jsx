import React from 'react'
import {Bookmark} from 'lucide-react';
import Card from './components/Card';

const App = () => {
  const jobs = [
  {
    id: 1,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9LOoOSzR6KPCiEl-Jh5bN3Cb_YNXCS8zCg&s",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 42,
    location: "Bangalore, India"
  },
  {
    id: 2,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIurYekb45T76_Exjihj7_qHWTpYn45oJsNg&s",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: 55,
    location: "Hyderabad, India"
  },
  {
    id: 3,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
    company: "Meta",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    payPerHour: 48,
    location: "Remote"
  },
  {
    id: 4,
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "1 day ago",
    post: "SDE I",
    tag1: "Full Time",
    tag2: "Fresher",
    payPerHour: 40,
    location: "Mumbai, India"
  },
  {
    id: 5,
    brandLogo: "https://toppng.com/uploads/preview/netflix-logo-png-11593869496jqso5gxgsy.png",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    payPerHour: 65,
    location: "Los Gatos, USA"
  },
  {
    id: 6,
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: 50,
    location: "Noida, India"
  },
  {
    id: 7,
    brandLogo: "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
    company: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Intern",
    tag1: "Part Time",
    tag2: "Internship",
    payPerHour: 25,
    location: "Bangalore, India"
  },
  {
    id: 8,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTosQkwY0e-sr2VYt7y5su1qiPTR2VU9-kDQ&s",
    company: "Uber",
    datePosted: "7 days ago",
    post: "Web Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 45,
    location: "Hyderabad, India"
  },
  {
    id: 9,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGQHwyoYbOZNE0GLZaUOcTpsd0Zi_XnGcuA&s",
    company: "Salesforce",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: 60,
    location: "Remote"
  },
  {
    id: 10,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3nP5hZpPFaVAaiQfuT5xhcyy2tLAounGnkg&s",
    company: "NVIDIA",
    datePosted: "5 days ago",
    post: "UI/UX Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: 58,
    location: "Pune, India"
  }
];

console.log(jobs);


  return (
      <div className="parent">
        {/* {arr.map(function (ele) {
            // Map ek nayaa array bnaata hai ek existing array se. Map har ek array element pr jaake loop krta hai and ek new array me result de detaa haiii. 
        //  return ele*2         Array elements multiply ho jaayenge 2 se.
        console.log(ele);
         return <User name={ele.name} />
        })} */}

        {jobs.map(function (tech, idx) {
          console.log(idx);
          
          return <div key={idx}>
           <Card company={tech.company}  post={tech.post} tag1={tech.tag1} tag2={tech.tag2} pay={tech.payPerHour} location={tech.location} logo={tech.brandLogo} datePosted={tech.datePosted}/>
           </div>
        })}
      </div>
  )
}

export default App
