import React, { type FC } from "react";
import { Link } from "gatsby";

import { Meta } from "@/components/meta";
import { Page } from "@/components/page";
import { Layout } from "@/components/layout";
import { Sidebar } from "@/components/sidebar";
import { toKebabCase } from "@/utils/to-kebab-case";
import { useTagsList } from "@/hooks/use-tags-list";
import { useSiteMetadata } from "@/hooks/use-site-metadata";

const TagsTemplate: FC = () => {
  const tags = useTagsList();

  return (
    <Layout>
      <Sidebar />
      <Page title="Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${toKebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export const Head: FC<{ location: { pathname: string } }> = ({ location }) => {
  const { title, description, url } = useSiteMetadata();
  const pageTitle = `Tags - ${title}`;

  return <Meta title={pageTitle} description={description} url={url + location.pathname} />;
};

export default TagsTemplate;
