import React, { type FC } from "react";

import { Meta } from "@/components/meta";
import { Page } from "@/components/page";
import { Layout } from "@/components/layout";
import { Sidebar } from "@/components/sidebar";
import { useSiteMetadata } from "@/hooks/use-site-metadata";

const NotFoundTemplate: FC = () => (
  <Layout>
    <Sidebar />
    <Page title="NOT FOUND">
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Page>
  </Layout>
);

export const Head: FC<{ location: { pathname: string } }> = ({ location }) => {
  const { title, description, url } = useSiteMetadata();
  const pageTitle = `Not Found - ${title}`;

  return <Meta title={pageTitle} description={description} url={url + location.pathname} />;
};

export default NotFoundTemplate;
