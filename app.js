'use strict';

const express = require('express');
const superagent = require('superagent');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('NO ID DETECTED!')
})

app.get('/:id', (req, res) => {
    superagent.get(`https://crmclientweb-test-100533.campusnexus.cloud/NexusCrmODataFeed/Leads?$filter=(StudentNumber1%20eq%20%27${req.params.id}%27%20and%20NavigationProject1/ProjectId%20eq%2009)&IsAudit=undefined&$count=true&$select=LeadId,Email,NationalityIDNumber,StudentNumber1,FirstName,FathersName,GrandfathersName,LastName,FirstNameArabic,FathersNameArabic,GrandfathersNameArabic,LastNameArabic,DateOfBirth,UNHCRNumber,JordanianSecurityIDNumber,FGPA,FCEGPA,FMajor,EmergencyContactName,EmergencyContactMobile,Mobile,SecondPhone,Landmark&$expand=NavigationNationalityId($select=NationalityNameArabic,NationalityId),NavigationGender($select=DisplayValue),NavigationCountryOfBirth($select=CountryNameArabic,CountryId),NavigationMaritalStatus($select=DisplayValue),NavigationLocalState($select=Name,StateNameArabic,StateId),NavigationFTwajihiStream($select=DisplayValue),NavigationCompletionYearP($select=DisplayValue),NavigationFCountry($select=DisplayValue),NavigationProgramLevelId($select=Name,ProgramLevelId,PLArabic),NavigationCampus($select=Name),NavigationAreaofInterestId($select=Name,AreaOfInterestArabic,AreaOfInterestId),NavigationDisabled1($select=DisplayValue),NavigationProject1($select=Name,ProjectId),NavigationProgramId($select=Name,ProgramId,ProgramNameArabic)`)
        .auth('EDU3', 'P@ssword3')
        .then(data => {
            res.send(data.body.value)
        })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

module.exports = app;