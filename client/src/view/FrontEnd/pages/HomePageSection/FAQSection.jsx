import React from "react";
import { useApiHook } from "../../../../hook/customHook";

export default function FAQSection() {
  const { data: faqs } = useApiHook("/faq");
  return (
    <>
      <div className="faq-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center mb-70">
                <span>Got Questions?</span>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-wrapper">
                <div className="accordion" id="faqAccordion">
                  {faqs?.map((item, index) => (
                    <div className="accordion-item" key={item?.id}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${item.id}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`faq${item.id}`}
                        >
                          {item?.question}
                        </button>
                      </h2>

                      <div
                        id={`faq${item.id}`}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">{item?.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
