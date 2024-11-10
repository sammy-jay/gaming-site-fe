"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import BottomNavBar from "@/components/navigation/user/BottomNavBar";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import Link from "next/link";
import Script from "next/script";
import { useForm } from "react-hook-form";
import {useUser} from "@clerk/nextjs";

export default function KYCFormPage() {
  const router = useRouter();
 const {user} = useUser()
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  const onSubmit = async ({ SSN, gender }) => {
    if (!file || !file2) {
      alert("Please upload both ID documents");
      return;
    }

    const formData = new FormData();
    formData.append("idFront", file);
    formData.append("idBack", file2);
    const mutations = [
      {
        patch: {
          query: "*[_type == 'userProfile' && userId == $userId]",
          params: {
            userId: user?.id,
          },
          set: {
            SSN,
            gender,
            idFront: formData.idFront,
            idBack: formData.idBack,
          },
        },
      },
    ];

    fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
        },
        body: JSON.stringify({ mutations }),
      }
    )
      .then((response) => console.log(response))
      .then((result) => {
        console.log(result);
        router.replace("/user/dashboard");
      })
      .catch((error) => console.error(error));
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const handleFileChange2 = async (e) => {
    const selectedFile = e.target.files[0];
    setFile2(selectedFile);
  };

  return (
    <main>
      <Script src="/js/index.js" />
      <Link href="#" className="scrollToTop">
        <i className="las la-angle-up"></i>
      </Link>

      <header className="header-section">
        <TopNavBar />
        <BottomNavBar />
      </header>

      <section
        className="hero-section bg--overlay bg_img bg_fixed"
        id="user-hero-section"
      >
        <div className="container">
          <div className="hero-content text-center">
            <h2 className="m-0">KYC Form</h2>
          </div>
        </div>
      </section>

      <div className="dashboard-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card custom--card">
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control form--control"
                        name="full_name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control form--control"
                        {...register("address")}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Gender</label>
                      <select
                        className="form-control form--control"
                        {...register("gender")}
                      >
                        <option>Select One</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">SSN Number</label>
                      <input
                        type="number"
                        className="form-control form--control"
                        {...register("SSN")}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">ID Photo Front </label>
                      <input
                        type="file"
                        className="form-control form--control"
                        onChange={handleFileChange}
                        accept=" .jpg,  .jpeg,  .png,  .pdf,  .doc,  .docx, "
                      />
                      <pre className="text--base mt-1">
                        Supported mimes: jpg,jpeg,png,pdf,doc,docx
                      </pre>
                    </div>
                    <div className="form-group">
                      <label className="form-label">ID Photo Back </label>
                      <input
                        type="file"
                        className="form-control form--control"
                        onChange={handleFileChange2}
                        accept=" .jpg,  .jpeg,  .png,  .pdf,  .doc,  .docx, "
                      />
                      <pre className="text--base mt-1">
                        Supported mimes: jpg,jpeg,png,pdf,doc,docx
                      </pre>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn--base w-100">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <div className="footer-top pt-120 pb-120">
          <div className="container">
            <div className="row gy-5 justify-content-between">
              <div className="col-lg-4 col-md-6">
                <div className="footer__widget">
                  <Link href="/" className="logo">
                    <img src="/images/logo.png" />
                  </Link>
                  <p>
                    Make signals become figures, figures become money and money
                    become yours.
                  </p>
                  <ul className="post__share"></ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h5 className="title">Quick Links</h5>
                  <ul className="widget__links">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/user/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer__widget">
                  <h5 className="title">Policies</h5>
                  <ul className="widget__links">
                    <li>
                      <Link href="/policy/terms-of-use/99">Terms of Use</Link>
                    </li>
                    <li>
                      <Link href="/policy/terms-of-service/94">
                        Terms Of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/policy/privacy-policy/92">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h5 className="title">Our Newsletter</h5>
                  <p>
                    Subscribe our newsletter to get regular news and tips. We
                    promise we won&#039;t harass you.
                  </p>
                  <form className="subscribe-form" id="subscribe-form">
                    <input
                      type="email"
                      className="form-control subscribe--form--control"
                      name="email"
                      placeholder="Your Email Address"
                    />
                    <button type="submit" className="cmn--btn">
                      <i className="lab la-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="footer-middle-wrapper">
              <div className="row g-0">
                <div className="col-lg-4">
                  <div className="footer__contact__item">
                    <div className="footer__contact__thumb">
                      <i className="las la-envelope-open-text"></i>
                    </div>
                    <div className="footer__contact__content">
                      <h6 className="footer__contact__title">
                        <Link href="mailto:support@tetracryptoplus.com">
                          support@tetracryptoplus.com
                        </Link>
                      </h6>
                      <span className="info">Email Address</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer__contact__item">
                    <div className="footer__contact__thumb">
                      <i className="las la-phone-volume"></i>
                    </div>
                    <div className="footer__contact__content">
                      <h6 className="footer__contact__title">
                        <Link href="tel:+1 (615) 769-8768">
                          +1 (615) 769-8768
                        </Link>
                      </h6>
                      <span className="info">Call Us Now</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer__contact__item">
                    <div className="footer__contact__thumb">
                      <i className="las la-map-marked-alt"></i>
                    </div>
                    <div className="footer__contact__content">
                      <h6 className="footer__contact__title">
                        <Link href="#">
                          1207 Bittern Way Suisun City, California.
                        </Link>
                      </h6>
                      <span className="info">Our Address</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            Copyright © 2024. All Rights Reserved By
            <Link href="/" className="text--base">
              TetraCryptoPlus
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
