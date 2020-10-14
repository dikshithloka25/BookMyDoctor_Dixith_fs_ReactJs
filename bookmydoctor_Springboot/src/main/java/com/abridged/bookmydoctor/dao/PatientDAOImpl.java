package com.abridged.bookmydoctor.dao;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.AvailabilityDates;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;
import com.abridged.bookmydoctor.exception.AppointmentException;
import com.abridged.bookmydoctor.exception.AvailabilityException;
import com.abridged.bookmydoctor.exception.DoctorException;
import com.abridged.bookmydoctor.exception.FeedBackException;
import com.abridged.bookmydoctor.exception.PatientException;

@Repository
public class PatientDAOImpl implements PatientDAO {

	@PersistenceUnit
	private EntityManagerFactory emf;

	@Override
	public boolean addPatient(PatientInfoBean bean) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			manager.persist(bean);
			transaction.commit();
			return true;

		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();

		}
		manager.close();
		throw new PatientException("Please check the values entered");
	}

	@Override
	public boolean addAppointment(AppointmentInfoBean bean) {
		EntityManager manager = emf.createEntityManager();
//		String jpql = "select z from AvailabilityDates z where z.doctorId =:id";
//		TypedQuery<AvailabilityDates> query = manager.createQuery(jpql, AvailabilityDates.class);
//		query.setParameter("id", bean.getDoctor().getDoctorId());
//		AvailabilityDates availability = query.getSingleResult();
		EntityTransaction transaction = manager.getTransaction();

//		if (bean.getAppointmentDate().after(new Date()) && bean.getAppointmentDate().after(availability.getFromDate())
//				&& availability.getToDate().after(bean.getAppointmentDate())) {
			transaction.begin();
			try {
				manager.persist(bean);
				transaction.commit();
				return true;

			} catch (Exception e) {
				transaction.rollback();
				e.printStackTrace();

			}
		
		manager.close();
		throw new AppointmentException("Appointment Not Added,Please check the Available dates");
	}

	@Override
	public boolean patientFeedBack(FeedBackInfoBean bean) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(bean);
			transaction.commit();
			return true;

		} catch (Exception e) {
			transaction.rollback();

		}
		manager.close();
		throw new FeedBackException("Feedback is not Added");
	}

	@Override
	public List<DoctorInfoBean> getDoctors(String speciality, String location) {
		EntityManager manager = emf.createEntityManager();

		String jpql = "select z from DoctorInfoBean z where z.speciality =:speciality AND z.location=:location";

		TypedQuery<DoctorInfoBean> query = manager.createQuery(jpql, DoctorInfoBean.class);
		query.setParameter("speciality", speciality);
		query.setParameter("location", location);
		List<DoctorInfoBean> doctorsList = query.getResultList();
		manager.close();
		if (doctorsList != null) {

			return doctorsList;
		}
		throw new DoctorException("No Doctors found with Particular Speciality and location");
	}

	@Override
	public PatientInfoBean loginPatient(String email, String password) {

		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		String login = "select d from PatientInfoBean d";
		TypedQuery<PatientInfoBean> query = manager.createQuery(login, PatientInfoBean.class);

		List<PatientInfoBean> records = query.getResultList();
		transaction.commit();
		for (PatientInfoBean record : records) {
			if (email.equals(record.getEmail()) && password.equals(record.getPassword())) {
				return record;
			}
		}
		manager.close();
		throw new PatientException("Enter Valid Credentials");
	}

	@Override
	public boolean editPatientProfile(PatientInfoBean bean) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			PatientInfoBean record = manager.find(PatientInfoBean.class, bean.getPatientId());
			record.setPatientName(bean.getPatientName());
			record.setMobileNo(bean.getMobileNo());
			record.setEmail(bean.getEmail());
			record.setPassword(bean.getPassword());
			record.setBloodGroup(bean.getBloodGroup());
			record.setGender(bean.getGender());
			record.setAge(bean.getAge());
			record.setAddress(bean.getAddress());

			transaction.commit();
			return true;

		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();

		}

		manager.close();
		throw new PatientException("Enter Valid Credentials");
	}

	@Override
	public List<AppointmentInfoBean> getAppointmentsByPatient(int patientId) {

		EntityManager manager = emf.createEntityManager();
		String jpql = "select z from AppointmentInfoBean z where z.patient.patientId =:id";
		TypedQuery<AppointmentInfoBean> query = manager.createQuery(jpql, AppointmentInfoBean.class);
		query.setParameter("id", patientId);
		List<AppointmentInfoBean> appointmentsList = query.getResultList();
		manager.close();
		if (appointmentsList != null) {

			return appointmentsList;
		}
		throw new AppointmentException("No Appointments Found with PatientId");
	}

	@Override
	public AvailabilityDates getAvailabilityDatesOfDoctor(int doctorId) {
		EntityManager manager = emf.createEntityManager();
		String jpql = "select z from AvailabilityDates z where z.doctorId =:id";
		TypedQuery<AvailabilityDates> query = manager.createQuery(jpql, AvailabilityDates.class);
		query.setParameter("id", doctorId);
		AvailabilityDates availabilityList = query.getSingleResult();
		manager.close();
		if (availabilityList != null) {

			return availabilityList;
		}
		throw new AvailabilityException("Doctor ID not Found");
	}

	@Override
	public List<FeedBackInfoBean> getFeedBacksOfDoctors(int doctorId) {
		EntityManager manager = emf.createEntityManager();

		List<FeedBackInfoBean> feedBackList = null;
		try {
			String jpql = "select z from FeedBackInfoBean z where z.doctorInfo.doctorId =:id";
			TypedQuery<FeedBackInfoBean> query = manager.createQuery(jpql, FeedBackInfoBean.class);
			query.setParameter("id", doctorId);
			feedBackList = query.getResultList();
		} catch (Exception e) {

			e.printStackTrace();
		}
		manager.close();
		if (feedBackList != null) {

			return feedBackList;
		}
		throw new FeedBackException("no FeedBacks Found for Particular doctorId");
	}

}
