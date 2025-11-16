import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" style={{ fontWeight: '700' }}>About me</h1>
            <hr className="t_border my-4 ml-0 text-left" style={{ borderWidth: '2px', opacity: '0.3' }} />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-color)' }}>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <div className="work-timeline">
              {worktimeline.map((data, i) => {
                return (
                  <div key={i} className="work-item mb-4 p-4" style={{
                    borderLeft: '4px solid var(--primary-color)',
                    background: 'linear-gradient(135deg, rgba(14, 210, 247, 0.1) 0%, rgba(14, 210, 247, 0.05) 100%)',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(14, 210, 247, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <h4 className="mb-2" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>
                      {data.jobtitle}
                    </h4>
                    <p className="mb-1" style={{ fontSize: '16px', fontWeight: '600' }}>
                      {data.where}
                    </p>
                    <p className="mb-0" style={{ fontSize: '14px', opacity: '0.8' }}>
                      {data.date}
                    </p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i} className="mb-4">
                  <h4 className="progress-title mb-3" style={{ color: 'var(--primary-color)', fontSize: '18px', fontWeight: '700' }}>
                    {data.name}
                  </h4>
                  <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
                    {data.subSkills.map((skill, j) => {
                      return (
                        <span
                          key={j}
                          className="skill-badge"
                          style={{
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, rgba(14, 210, 247, 0.15) 0%, rgba(14, 210, 247, 0.08) 100%)',
                            border: '1px solid rgba(14, 210, 247, 0.3)',
                            color: 'var(--text-color)',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            cursor: 'default',
                            display: 'inline-block',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--primary-color)';
                            e.currentTarget.style.borderColor = 'var(--primary-color)';
                            e.currentTarget.style.color = 'var(--bg-color)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(14, 210, 247, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(14, 210, 247, 0.15) 0%, rgba(14, 210, 247, 0.08) 100%)';
                            e.currentTarget.style.borderColor = 'rgba(14, 210, 247, 0.3)';
                            e.currentTarget.style.color = 'var(--text-color)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Core Expertise</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4 mb-4" key={i} style={{
                  padding: '20px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(14, 210, 247, 0.08) 0%, rgba(14, 210, 247, 0.03) 100%)',
                  border: '1px solid rgba(14, 210, 247, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(14, 210, 247, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(14, 210, 247, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <h5 className="service__title" style={{ color: 'var(--primary-color)', fontSize: '20px', marginBottom: '12px' }}>
                    {data.title}
                  </h5>
                  <p className="service_desc" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    {data.description}
                  </p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
