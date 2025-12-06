// TermsOfServiceScreen.js
import React, { useState } from "react";
import { Linking, Pressable, ScrollView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";

const TermsOfService = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>TERMS OF SERVICES</Text>

      <Text style={styles.sectionTitle}>1.1 Platform Description</Text>
      <Text style={styles.text}>
        GO Pickup is a web and mobile application-based platform accessible at{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://www.gopickup.com.ng")}
        >
          www.gopickup.com.ng
        </Text>{" "}
        which connects individuals or organizations requiring logistics and
        haulage services (“Senders”) with verified logistics professionals or
        vehicle owners (“Pilots”).
      </Text>
      <Text style={styles.text}>
        Pilots can provide the following delivery services:
        {"\n"}• On-Demand Jobs Delivery Service: Immediate or grouped order
        delivery.
        {"\n"}• Scheduled Delivery Service: Future or recurring order delivery
        services.
        {"\n"}These services are collectively referred to as the “Services.”
      </Text>

      <Text style={styles.sectionTitle}>1.2 OPERATOR</Text>
      <Text style={styles.text}>
        The platform is operated by GO Pickup Logistics Ltd. (“GO Pickup”).
        Access to and use of the platform is governed by these General Terms and
        Conditions, which may be updated from time to time. By using the
        Application or accepting these Terms, you agree to be bound by them. If
        you disagree, you must discontinue use immediately.
      </Text>

      <Text style={styles.sectionTitle}>1.3 ADDITIONAL TERMS</Text>
      <Text style={styles.text}>
        Some Features may be governed by additional terms ("Additional Terms"). 
        in the event of a conflict between General and Additional Terms, 
        the Additional Terms will prevail.
      </Text>

      <Text style={styles.sectionTitle}>1.4 CHANGES TO TERMS</Text>
      <Text style={styles.text}>
        Go Pickup reserves the right to amend these General and Additional Terms. 
        Continued use after such changes constistute acceptence
      </Text>

      <Text style={styles.sectionTitle}>1.5 PRIVACY</Text>
      <Text style={styles.text}>
        Personal data is handled per the Go Pickup Privacy Policy.
      </Text>

      <Text style={styles.sectionTitles}>2. ACCOUNT REGISTRATION</Text>

      <Text style={styles.sectionTitle}>2.1 Required Information</Text>
      <Text style={styles.text}>
        To register an account ("Account"), you must provide: 
      </Text>

      <Text style={styles.texts}>
        {"\n"}• full name, phone number, email address, location.
        {"\n"}• username, password, and Nigerian Identity Number (NIN).
        {"\n"}• For companies: CAC Registration Number, vehicle type/model.
        {"\n"}• valid driver’s license.
      </Text>
      <Text style={styles.text}>
        By registering, you agree that all information is true and will be kept
        up to date. You also consent to receive communications via SMS, email,
        phone, or in-app notifications related to your service use.
      </Text>

      <Text style={styles.sectionTitle}>2.2 REPRESENTATION AND UPDATES</Text>
      <Text style={styles.text}>
        You agree that the information provided is accurate and will be updated as neccessary.
      </Text>
      <Text style={styles.sectionTitle}>2.3 Communication Consent</Text>
      <Text style={styles.text}>
        You consent to recieve communication via SMS, email, phone, or in-app notifications related service use.
      </Text>
      <Text style={styles.sectionTitle}>2.4 ELIGIBILITY</Text>
      <Text style={styles.text}>
        You may not use the platform if you:
      </Text>
      <Text style={styles.text}>
        {"\n"}• Are under legal contracting age.
        {"\n"}• Are legally restricted from using the service.
      </Text>

      <Text style={styles.sectionTitle}>2.5 USER WARRANTIES</Text>
      <Text style={styles.text}>
        By registering, you warrent that:
      </Text>
      <Text style={styles.text}>
        {"\n"}• You meet the legal age requirement.
        {"\n"}• You're authorized to act on behalf of your business (if applicable).
        {"\n"}• You possess the skills, licenses, and eequipment to perform service.
        {"\n"}• You comply with Nigerian law and GO Pickup standards.
      </Text>

      <Text style={styles.sectionTitle}>3. RELATIONSHIP</Text>
      <Text style={styles.text}>
       {"\n"}• GO Pickup is a facilitator and not a logistics provider.  
       {"\n"}• Pilots are independent contractors and not employees. 
       {"\n"}• GO Pickup does not directly provide delivery services.
      </Text>

      <Text style={styles.sectionTitles}>4. PERFORMANCE OF SERVICES</Text>
      <Text style={styles.sectionTitle}>Pilots must:</Text>
      <Text style={styles.text}>
       {"\n"}• Deliver services lawfully, proffessionally, and diligently.  
       {"\n"}• Follow road safety and product-specific delivery rules. 
       {"\n"}• Enable GPS tracking during deliveries.
       {"\n"}• Notify GO Pickup of delays, incidents, or dispute stage.
      </Text>

      <Text style={styles.sectionTitle}>5. PILOT OBLIGATIONS</Text>
      <Text style={styles.text}>
        Pilots must:
        {"\n"}• Maintain account confidentiality.
        {"\n"}• Deliver services lawfully, professionally, and diligently.
        {"\n"}• Enable GPS tracking during deliveries.
        {"\n"}• Avoid misuse, impersonation, or unethical conduct.
        {"\n"}• Not reverse-engineer or exploit the platform.
      </Text>

      <Text style={styles.sectionTitle}>6. INSURANCE </Text>
      <Text style={styles.text}>
        Pilots must maintain:
        {"\n"}• Vehicle and third-party insurance.
        {"\n"}• Workers’ compensation (if applicable).
        {"\n"}• Other coverages as required by law.
      </Text>

      <Text style={styles.sectionTitle}>7. RISK</Text>
      <Text style={styles.text}>
        Pilot bear all risks associated with service delivery.
      </Text>

      <Text style={styles.sectionTitle}>8. VERIFICATION</Text>
      <Text style={styles.text}>
        GO Pickup may verify your identity, vehicle registration and other submitted information.
      </Text>
      
      <Text style={styles.sectionTitle}>9. EQUIPMENT & EXPENSES</Text>
      <Text style={styles.text}>
        Pilots must supply and maintain thier own vehicle and tools.
      </Text>

      <Text style={styles.sectionTitle}>10. INVOICING & PAYMENTS</Text>
      <Text style={styles.text}>
        {"\n"}• GO Pickup acts as an agent to collect payments from Senders.
        {"\n"}• Pilots are processed within 48 hours of job completion.
        {"\n"}• Tax invoices are issued by GO Pickup on behalf of the Pilot.
      </Text>

      <Text style={styles.sectionTitle}>11. REVIEWS AND RATING</Text>
      <Text style={styles.text}>
        Senders may rate Pilots as Good, Neutral, or Bad. These reviews affect a
        Pilot’s visibility and credibility on the platform. GO Pickup reserves
        the right to moderate reviews as per its Review Policy.
      </Text>

      <Text style={styles.sectionTitle}>12. GRANT OF LICENSE</Text>
      <Text style={styles.text}>
        The Platform and its entire contents, features, and funtionality
        (including but not limited to all information, software, text, displays, 
        images, video and audio, and the design, selection, and arrangement thereof), 
        are owned by us, our license or other providers of such material and are 
        protected under Nigeria copyright, trademark, patent, trade secret, and other Intellectual
        property or proprietary rights laws.
      </Text>
      <Text style={styles.text}>
        These Terms permits you to use the Platform for your personal use only.
        You must not reproduce, decompile, reverse engineer, distribute, modify, create derivative 
        works of, publicly display, republish, download, store or transmit any of the material on our Platform,
        without our written permission and/or the express,  authorized written 
        permission of the intellectual property right owner.
      </Text>


      <Text style={styles.sectionTitle}>13. NON-SOLICITATION</Text>
      <Text style={styles.text}>
        {"\n"}• Pilot must not bypass the platform to work directly 
        with Senders for 12 months after introduction.
      </Text>

      <Text style={styles.sectionTitle}>14. USER CONTENT AND THIRD-PARTY LINKS</Text>
      <Text style={styles.text}>
        {"\n"}• User content remains your responsibility.
        {"\n"}• GO Pickup is not liable for third-party site content.
      </Text>

      <Text style={styles.sectionTitle}>15. INTELLECTUAL PROPERTY</Text>
      <Text style={styles.text}>
        {"\n"}• GO Pickup owns all intellectual propety on the platform.
        {"\n"}• Users are granted limited, non-tranfarable rights to use the platform.
      </Text>

      <Text style={styles.sectionTitle}>16. GENERAL DISCLAIMER  </Text>
      <Text style={styles.text}>
        GO Pickup:
        {"\n"}•provides the platform “as is”.
        {"\n"}•Disclaims liability for indirect or consequential damages. 
        {"\n"}•is not liable for user condut, or third-party content.
      </Text>

      <Text style={styles.sectionTitle}>17. LIMITATION OF LIABILITY  </Text>
      <Text style={styles.text}>
        {"\n"}•Liability is limited to the most resent commission fee earned.
        {"\n"}•GO Pickup is not-liable for lossess due to external events or force majeure. 
        {"\n"}•Legal proceedings can only commence after good-faith mediation efforts.
      </Text>

      <Text style={styles.sectionTitle}>18. INDEMNITY</Text>
      <Text style={styles.text}>
        Pilots indemnify GO Pickup against any claims arising from their actions
        or omissions, except where GO Pickup is directly at fault.
      </Text>

      <Text style={styles.sectionTitle}>19. DISPUTE RESOLUTION</Text>
      <Text style={styles.text}>
        {"\n"}• Disputes must be reported within 72 hours of delivery. 
        {"\n"}• GO Pickup may mediate and freeze accounts pending resolution. 
        {"\n"}• Legal proceedings can only commence after good-faith mediation effors.
      </Text>

      <Text style={styles.sectionTitle}>20. TERMINATION</Text>
      <Text style={styles.text}>
        {"\n"}• Users may terminate by giving 2 weeks’ notice. 
        {"\n"}• GO Pickup may terminate accounts for breaches, inactivity, or at its
        discretion.
      </Text>

      <Text style={styles.sectionTitle}>21. JURISDICTION AND VENUE</Text>
      <Text style={styles.text}>
        Disputes shall be resolved exclusively in the courts of Abuja Nigeria.
      </Text>

      <Text style={styles.sectionTitle}>22. GOVERNING LAW</Text>
      <Text style={styles.text}>
        These Terms are governed by Nigerian law, with jurisdiction in Abuja.
      </Text>

      <Text style={styles.sectionTitle}>23. SEVERABILITY</Text>
      <Text style={styles.text}>
        if any part of the Terms is found unforceable, the rest remains valid.
      </Text>

      <Text style={styles.sectionTitle}>24. WAIVER</Text>
      <Text style={styles.text}>
        No waiver is valid ulesss in writing.
      </Text>

      <Text style={styles.sectionTitle}>25. CONTACT INFORMATION</Text>
      <Text style={styles.text}>
        You may reach GO Pickup at:
        {"\n"}Email:{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("mailto:support@gopickup.com")}
        >
          support@gopickup.com
        </Text>
      </Text>

      <Text style={styles.sectionTitle}>26. ASSIGNMENT</Text>
      <Text style={styles.text}>
        {"\n"}• GO Pickup may assign its right to affiliates or successors. 
        {"\n"}• Pilots must obtain written consent before assigning thier rights. 
      </Text>

      <Text style={styles.sectionTitle}>27. SUBCONTRACTORS</Text>
      <Text style={styles.text}>
        {"\n"}• Subcontractors must register independently and be verified. 
        {"\n"}• Pilots remain fully liable for Subcontractor actions. 
      </Text>
      
      <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        marginTop:20
      }}
    >
      {/* Checkbox */}
      <Pressable
        onPress={() => setChecked(!checked)}
        style={{
          height: 20,
          width: 20,
          borderWidth: 2,
          borderColor: "#333",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        {checked && (
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>✓</Text>
        )}
      </Pressable>

      {/* Text */}
      <Text style={{ fontSize: 10 }}>
        I have read and agree to the <Text style={{ fontWeight: "bold" }}>Terms of Service</Text>
      </Text>
    </View>      

        
    <View style={{ height: 40,marginVertical: 15,  flexDirection:'row', justifyContent:"flex-end", alignItems:'center' }} >
      <TouchableOpacity style={{
        backgroundColor: "#439D25",
        paddingVertical: 20,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        width:'50%',
      }}
        onPress={() => router.push("/tabs/home")}
      >
        <Text style={{color:'white', fontSize:15}}>Continue</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop:16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
  },
  sectionTitles: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
    marginTop: 8,
  },
  texts: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
    marginTop: 0,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 15,
    color: "#444",
  },
});

export default TermsOfService;
