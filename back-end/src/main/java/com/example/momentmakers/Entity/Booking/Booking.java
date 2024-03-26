package com.example.momentmakers.Entity.Booking;

import java.time.LocalDate;
import java.util.List;

import com.example.momentmakers.Entity.user.UserInfo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Table(name = "MM_Booking")
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Booking {
    @Id
    @GeneratedValue
    private Long bookingId;
    private String email;
    private String name;
    private String phone;
    private String state;
    private String city;
    private List<String> services ;
    private LocalDate date;
    private Double price;
    private String requirements;
    @ManyToOne
    @JoinColumn(name="user_userid")
    private UserInfo user;
}
