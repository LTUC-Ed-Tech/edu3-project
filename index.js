'use strict';

const superagent = require('superagent');

exports.edu = (req, res) => {
    superagent.get(`https://crmclientweb-100533.campusnexus.cloud/cmc.crm.workspace/NexusCrmODataFeed/Leads?$filter=(StudentNumber1%20eq%20%27${req.query.StudentID}%27%20and%20NavigationProject1/ProjectId%20eq%2038)&IsAudit=undefined&$count=true&$select=LeadId,Email,NationalityIDNumber,StudentNumber1,FirstName,FathersName,GrandfathersName,LastName,FirstNameArabic,FathersNameArabic,GrandfathersNameArabic,LastNameArabic,DateOfBirth,UNHCRNumber,JordanianSecurityIDNumber,FGPA,FCEGPA,FMajor,EmergencyContactName,EmergencyContactMobile,Mobile,SecondPhone,Landmark&$expand=NavigationNationalityId($select=NationalityNameArabic,NationalityId),NavigationGender($select=DisplayValue),NavigationCountryOfBirth($select=CountryNameArabic,CountryId),NavigationMaritalStatus($select=DisplayValue),NavigationLocalState($select=Name,StateNameArabic,StateId),NavigationFTwajihiStream($select=DisplayValue),NavigationCompletionYearP($select=DisplayValue),NavigationFCountry($select=DisplayValue),NavigationProgramLevelId($select=Name,ProgramLevelId,PLArabic),NavigationCampus($select=Name),NavigationAreaofInterestId($select=Name,AreaOfInterestArabic,AreaOfInterestId),NavigationDisabled1($select=DisplayValue),NavigationProject1($select=Name,ProjectId),NavigationProgramId($select=Name,ProgramId,ProgramNameArabic)`)
        .auth('EDU3', 'P@ssword3')
        .then(data => {
            res.send(data.body.value)
        })
}