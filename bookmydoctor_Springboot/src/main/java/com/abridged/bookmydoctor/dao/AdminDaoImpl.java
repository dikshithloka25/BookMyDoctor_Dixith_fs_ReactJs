package com.abridged.bookmydoctor.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.abridged.bookmydoctor.dto.AdminInfoBean;
import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;
import com.abridged.bookmydoctor.exception.AppointmentException;
import com.abridged.bookmydoctor.exception.DoctorException;
import com.abridged.bookmydoctor.exception.FeedBackException;
import com.abridged.bookmydoctor.exception.PatientException;

@Repository
public class AdminDaoImpl implements AdminDao {

	@PersistenceUnit
	private EntityManagerFactory emf;

	@Override
	public List<DoctorInfoBean> getAllDoctors() {
		String jpql = "select d from DoctorInfoBean d";
		EntityManager manager = emf.createEntityManager();
		TypedQuery<DoctorInfoBean> query = manager.createQuery(jpql, DoctorInfoBean.class);
		List<DoctorInfoBean> doctorsList = query.getResultList();
		
		if(doctorsList!=null) {
			
			return doctorsList;
		}
		throw new DoctorException("Doctors List is Empty");
	}

	@Override
	public boolean adminLogin(String email, String password) {
		
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		String login = "select d from AdminInfoBean d";
		TypedQuery<AdminInfoBean> query = manager.createQuery(login, AdminInfoBean.class);

		List<AdminInfoBean> records = query.getResultList();
		transaction.commit();
		for (AdminInfoBean record : records) {
			if (email.equals(record.getEmail()) && password.equals(record.getPassword())) {
				
				return true;
			}
		}
		throw new DoctorException("Please Enter valid Credentials or signup if you are new");
	}


	@Override
	public DoctorInfoBean getDoctor(int doctorId) {
		EntityManager manager = emf.createEntityManager();
		DoctorInfoBean doctor = manager.find(DoctorInfoBean.class, doctorId);
		manager.close();
		if(doctor!=null) {
			
			return doctor;
		}
		throw new DoctorException("No Doctor Found with the ID");
	}

	@Override
	public boolean deleteDoctor(int doctorId) {
		String jpql = "delete from DoctorInfoBean d where d.doctorId=:dId";
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			Query query = manager.createQuery(jpql);
			query.setParameter("dId", doctorId);
			int i = query.executeUpdate();
			transaction.commit();
			if (i != 0) {
				return true;
			} 
		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		}

		throw new DoctorException("Cannot Delete Doctor who have Appointments OR check the ID entered ");
	}

	@Override
	public List<PatientInfoBean> getAllPatients() {
		String jpql = "select p from PatientInfoBean p";
		EntityManager manager = emf.createEntityManager();
		TypedQuery<PatientInfoBean> query = manager.createQuery(jpql, PatientInfoBean.class);
		List<PatientInfoBean> patientsList = query.getResultList();
		if(patientsList!=null) {
			
			return patientsList;
		}
		throw new PatientException("Patients List is Empty");
	}

	@Override
	public PatientInfoBean getPatient(int patientId) {
		EntityManager manager = emf.createEntityManager();
		PatientInfoBean patient = manager.find(PatientInfoBean.class, patientId);
		manager.close();
		if(patient!=null) {
			
			return patient;
		}
		throw new PatientException("Patient Not Found with the ID");
	}

	@Override
	public boolean deletePatient(int patientId) {
		String jpql = "delete from PatientInfoBean p where p.patientId=:pId";
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			Query query = manager.createQuery(jpql);
			query.setParameter("pId", patientId);
			int i = query.executeUpdate();
			transaction.commit();
			if (i != 0) {
				return true;
			}
		} catch (Exception e) {
			transaction.rollback();
			System.out.println("sachin");
			e.getMessage();
		}

		throw new PatientException("Cannot Delete Patient who booked Appointment OR check the ID entered");
	}

	@Override
	public List<AppointmentInfoBean> getAllAppointments() {
		String jpql = "select a from AppointmentInfoBean a";
		EntityManager manager = emf.createEntityManager();
		TypedQuery<AppointmentInfoBean> query = manager.createQuery(jpql, AppointmentInfoBean.class);
		List<AppointmentInfoBean> appointments = query.getResultList();
		if(appointments!=null) {
			
			return appointments;
		}
		throw new AppointmentException("Appointments List not found");
	}

	@Override
	public AppointmentInfoBean getAppointment(int appointmentId) {
		EntityManager manager = emf.createEntityManager();
		AppointmentInfoBean appointment = manager.find(AppointmentInfoBean.class, appointmentId);
		manager.close();
		if(appointment!=null) {
			
			return appointment;
		}
		throw new AppointmentException("Appointment Not Found with the ID");
	}

	@Override
	public List<FeedBackInfoBean> getAllFeedBacks() {
		String jpql = "select a from FeedBackInfoBean a";
		EntityManager manager = emf.createEntityManager();
		TypedQuery<FeedBackInfoBean> query = manager.createQuery(jpql, FeedBackInfoBean.class);
		List<FeedBackInfoBean> feedBacks = query.getResultList();
		if(feedBacks!=null) {
			
			return feedBacks;
		}
		throw new FeedBackException("FeedBacks List is Empty");
	}

}
