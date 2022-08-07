import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HealthPolicy } from '../classes/health-policy';
import { Hospital } from '../classes/hospital';
import { Illness } from '../classes/illness';
import { Area } from '../classes/area';
import { HomePolicy } from '../classes/home-policy';
import { Healthpolicyrequest } from '../classes/healthpolicyrequest';
import { Homepolicyrequest } from '../classes/homepolicyrequest';
import { Admin } from '../classes/admin';
import { UserPolicy } from '../classes/user-policy';
import { Policy } from '../classes/policy';

@Injectable({
  providedIn: 'root'
})
export class InsuranceManagementService {

  usersurl = "http://localhost:8080/api/users"
  adminsurl = "http://localhost:8080/api/admins/"
  healthpolicyurl = "http://localhost:8080/api/healthpolicies"
  homepolicyurl = "http://localhost:8080/api/homepolicies"
  hospitalsbypolicyurl = "http://localhost:8080/api/hospitals/search/getAllHospitalsUsingPolicyId?polid="
  illnessbypolicyurl = "http://localhost:8080/api/illness/search/getAllIllnessIncludedInPolicy?polid="
  areaurl = "http://localhost:8080/api/area/"
  healthpolrequrl = "http://localhost:8080/api/healthpoliciesrequests"
  homepolrequrl = "http://localhost:8080/api/homepoliciesrequests"
  userpolicyurl = "http://localhost:8080/api/userpolicies"
  policyurl = "http://localhost:8080/api/policyids"
  alluserswithhomepolicy = "http://localhost:8080/api/userpolicies/search/getAllUsersWithHomePolicy"
  alluserswithhealthpolicy = "http://localhost:8080/api/userpolicies/search/getAllUsersWithHealthPolicy"

  healthpolicy: HealthPolicy = new HealthPolicy(0, 0, "", "", "", 0, 0, 0)

  constructor(private httpClient: HttpClient) { }

  getAllHealthPolicy(): Observable<HealthPolicy[]> {
    return this.httpClient.get<getHealthPolicyResponse>(this.healthpolicyurl).pipe(map((response: any) => response._embedded.healthPolicies))
  }

  gethealthPolicy() {
    return this.healthpolicy
  }

  setHealthPolicy(healthpolicy: HealthPolicy) {
    this.healthpolicy = healthpolicy
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<getUserResponse>(this.usersurl).pipe(map((response: any) => response._embedded.users))
  }

  getHospitalByPolId(policyid: number) {
    const hospitalbypolid = this.hospitalsbypolicyurl + policyid
    return this.httpClient.get<getHospitalResponse>(hospitalbypolid).pipe(map((response: any) => response._embedded.hospitals))
  }

  getAllHealthPolicyRequests(): Observable<Healthpolicyrequest[]> {
    return this.httpClient.get<getHealthpolicyResponse>(this.healthpolrequrl).pipe(map((response: any) => response._embedded.healthPolicyRequests))
  }

  getAllHomePolicyRequests(): Observable<Homepolicyrequest[]> {
    return this.httpClient.get<getHomepolicyResponse>(this.homepolrequrl).pipe(map((response: any) => response._embedded.homePolicyRequests))
  }

  getAllUsersWithHomePolicy(): Observable<UserPolicy[]> {
    return this.httpClient.get<getUsersPolicies>(this.alluserswithhomepolicy).pipe(map((response: any) => response._embedded.userPolicies))
  }

  getAllUsersWithHealthPolicy(): Observable<UserPolicy[]> {
    return this.httpClient.get<getUsersPolicies>(this.alluserswithhealthpolicy).pipe(map((response: any) => response._embedded.userPolicies))
  }

  deleteHealthpolicyRequest(userid: number) {
    return this.httpClient.delete<Healthpolicyrequest>(this.healthpolrequrl + "/" + `${userid}`)
  }

  deleteHomepolicyRequest(userid: number) {
    return this.httpClient.delete<Homepolicyrequest>(this.homepolrequrl + "/" + `${userid}`)
  }
  
  deleteUserPolicy(userid: number,policyid:number) {
    //http://localhost:8080/api/userpolicies/search/getUserPolicyById?usrid=1&polid=5001
    return this.httpClient.delete<UserPolicy>("http://localhost:8080/api/userpolicies/search/deleteByPolicyidAndUserid?userid=" + `${userid}` +"&policyid="+`${policyid}`)
  }

  deleteUserPolicyOfHome(policyid:number) {
    //http://localhost:8080/api/userpolicies/search/getUserPolicyById?usrid=1&polid=5001
    return this.httpClient.delete<UserPolicy>("http://localhost:8080/api/userpolicies/" + `${policyid}`)
  }

  updateHomePolicy(homePolicy:HomePolicy){
    console.log(homePolicy)
    const httpOptions = {
      headers : new HttpHeaders({ 
      'Content-type' : 'application/json',
      'Authorization' : 'auth-token',
      'Access-Control-Allow-Origin': '*'})
     
    }
    return this.httpClient.put<HomePolicy>(this.homepolicyurl+"/"+`${homePolicy.policyid}`,homePolicy,httpOptions)
  }

  getAreaById(areaid: number): Observable<Area> {
    const area = this.areaurl + areaid
    return this.httpClient.get<Area>(area)
  }

  getUserById(userid: number): Observable<User> {
    const userurl = "http://localhost:8080/api/users/" + userid
    return this.httpClient.get<User>(userurl)
  }

  getHealthPolicyById(policyid: number): Observable<HealthPolicy> {
    const useurl = "http://localhost:8080/api/healthpolicies/" + policyid
    return this.httpClient.get<HealthPolicy>(useurl)
  }

  getHomePolicyById(policyid: number): Observable<HomePolicy> {
    const useurl = "http://localhost:8080/api/homepolicies/" + policyid
    return this.httpClient.get<HomePolicy>(useurl)
  }

  getAdminByEmail(emailid: string): Observable<Admin> {

    return this.httpClient.get<Admin>(this.adminsurl + emailid)
  }

  getHomeInsuranceByusrId(usrid: number): Observable<HomePolicy> {
    const homepolicyurl = "http://localhost:8080/api/homepolicies/search/getHomePolicyByUserId?usrid=" + usrid
    return this.httpClient.get<HomePolicy>(homepolicyurl)
  }

  getHealthInsuranceByusrId(usrid: number): Observable<HealthPolicy> {
    const healthpolicyurl = "http://localhost:8080/api/healthpolicies/search/getHealthPolicyByUserId?usrid=" + usrid
    return this.httpClient.get<HealthPolicy>(healthpolicyurl)
  }

  getUserByEmail(emailid: string): Observable<User> {
    const emailurl = "http://localhost:8080/api/users/search/findByemailid?emailid=" + emailid
    return this.httpClient.get<User>(emailurl)
  }

  getIllnessByPolId(policyid: number) {
    const illnessbypolid = this.illnessbypolicyurl + policyid
    return this.httpClient.get<getIllnessResponse>(illnessbypolid).pipe(map((response: any) => response._embedded.illnesses))
  }

  saveUser(user: User): Observable<User> {
    console.log(user)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.httpClient.post<User>(this.usersurl, user, httpOptions)
  }

  aprovePolicy(approvedPolicy: UserPolicy): Observable<UserPolicy> {
    console.log(approvedPolicy)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.httpClient.post<UserPolicy>(this.userpolicyurl, approvedPolicy, httpOptions)
  }

  saveHealthPolicyRequest(request: Healthpolicyrequest): Observable<Healthpolicyrequest> {
    console.log(request)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.httpClient.post<Healthpolicyrequest>(this.healthpolrequrl, request, httpOptions)
  }

  saveHomePolicyRequest(request: Homepolicyrequest): Observable<Homepolicyrequest> {
    console.log(request)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.httpClient.post<Homepolicyrequest>(this.homepolrequrl, request, httpOptions)
  }

  savePolicy(policy: Policy): Observable<Policy> {
    console.log(policy)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.httpClient.post<Policy>(this.policyurl, policy, httpOptions)
  }

  saveHomePolicy(policy: HomePolicy): Observable<HomePolicy> {
    console.log(policy)
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.httpClient.post<HomePolicy>(this.homepolicyurl, policy, httpOptions)
  }

}

interface getUsersPolicies {
  _embedded: {
    userPolicies: UserPolicy[]
  }
}

interface getHomepolicyResponse {
  _embedded: {
    homePolicyRequests: Homepolicyrequest[]
  }
}

interface getHealthpolicyResponse {
  _embedded: {
    healthPolicyRequests: Healthpolicyrequest[]
  }
}

interface getIllnessResponse {
  _embedded: {
    illnesses: Illness[]
  }
}

interface getHospitalResponse {
  _embedded: {
    hospitals: Hospital[]
  }
}

interface getUserResponse {
  _embedded: {
    users: User[]
  }
}

interface getHealthPolicyResponse {
  _embedded: {
    healthPolicies: HealthPolicy[]
  }
}
