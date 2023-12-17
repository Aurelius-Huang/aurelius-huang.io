import Admonition from '@theme/Admonition';
import { BranchesOutlined, EyeOutlined, CommentOutlined } from '@ant-design/icons';

export default function ArticleHeader({ path, updatedAt }) {
    return (
        <div id="article-info">
            <Admonition type="info">
                <p>
                    <span class="article-hearder-update">
                        <BranchesOutlined /> {updatedAt}
                    </span>
                    <span class="article-hearder-reads">
                        <EyeOutlined /> <span class="waline-pageview-count" data-path={path} />
                    </span>
                    <span>
                        <CommentOutlined /> <span class="waline-comment-count" data-path={path} />
                    </span>
                </p>
            </Admonition>
        </div>
    );
}

